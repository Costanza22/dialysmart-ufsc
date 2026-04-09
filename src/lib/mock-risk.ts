import type { MockRiskResult, RiskLevel, SessionValues } from "@/types/session";

/**
 * Regras heurísticas apenas para protótipo (sem validação clínica).
 * Substituir por modelo de ML + dados reais na fase de pesquisa.
 */
export function computeMockRisk(v: SessionValues): MockRiskResult {
  const { pasSistolica, pasDiastolica, fc, ultrafiltrationMlPerH, interdialyticGainKg } =
    v;

  const pick = (level: RiskLevel, hint: string): MockRiskResult => ({
    level,
    hint,
  });

  if (pasSistolica < 90) {
    return pick(
      "critico",
      "PAS abaixo de 90 mmHg sugere risco imediato de hipotensão intradialítica. Avaliar redução de UF e volume."
    );
  }

  if (pasSistolica < 110 && fc >= 100) {
    return pick(
      "critico",
      "PAS limítrofe com taquicardia: padrão compatível com descompensação hemodinâmica iminente."
    );
  }

  if (pasDiastolica < 50 && pasSistolica < 120) {
    return pick(
      "preventivo",
      "PAD baixa com PAS moderada: monitorar de perto e considerar ajuste gradual da ultrafiltração."
    );
  }

  if (ultrafiltrationMlPerH > 600) {
    return pick(
      "preventivo",
      "Taxa de ultrafiltração elevada aumenta risco de queda rápida de volume intravascular."
    );
  }

  if (interdialyticGainKg > 3.5) {
    return pick(
      "preventivo",
      "Ganho interdialítico elevado pode exigir remoção agressiva de fluido e maior risco de hipotensão."
    );
  }

  return pick(
    "baixo",
    "Parâmetros inseridos não acionam alertas heurísticos neste protótipo. Manter monitorização clínica habitual."
  );
}
