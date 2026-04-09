export type RiskLevel = "baixo" | "preventivo" | "critico";

export type SessionValues = {
  pasSistolica: number;
  pasDiastolica: number;
  fc: number;
  ultrafiltrationMlPerH: number;
  interdialyticGainKg: number;
  dryWeightKg: number;
};

export type MockRiskResult = {
  level: RiskLevel;
  hint: string;
};
