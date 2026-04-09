import type { RiskLevel } from "@/types/session";

const container: Record<RiskLevel, string> = {
  baixo:
    "border-emerald-200 bg-emerald-50 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-50",
  preventivo:
    "border-amber-200 bg-amber-50 text-amber-950 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-50",
  critico:
    "border-red-200 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/40 dark:text-red-50",
};

const titles: Record<RiskLevel, string> = {
  baixo: "Sem alerta preventivo",
  preventivo: "Alerta preventivo",
  critico: "Alerta crítico",
};

type AlertBannerProps = {
  level: RiskLevel;
  message: string;
  className?: string;
};

export function AlertBanner({ level, message, className = "" }: AlertBannerProps) {
  return (
    <div
      role="status"
      className={`rounded-xl border p-4 text-sm leading-relaxed ${container[level]} ${className}`}
    >
      <p className="font-semibold">{titles[level]}</p>
      <p className="mt-1 opacity-95">{message}</p>
    </div>
  );
}
