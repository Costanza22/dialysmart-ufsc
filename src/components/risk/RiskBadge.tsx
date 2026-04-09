import type { RiskLevel } from "@/types/session";

const styles: Record<RiskLevel, string> = {
  baixo:
    "border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-100",
  preventivo:
    "border-amber-200 bg-amber-50 text-amber-950 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-100",
  critico:
    "border-red-200 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/50 dark:text-red-100",
};

const labels: Record<RiskLevel, string> = {
  baixo: "Risco baixo",
  preventivo: "Risco preventivo",
  critico: "Risco crítico",
};

type RiskBadgeProps = {
  level: RiskLevel;
  className?: string;
};

export function RiskBadge({ level, className = "" }: RiskBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium ${styles[level]} ${className}`}
    >
      {labels[level]}
    </span>
  );
}
