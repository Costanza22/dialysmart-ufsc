"use client";

import { useState } from "react";
import Link from "next/link";
import { AlertBanner } from "@/components/risk/AlertBanner";
import { RiskBadge } from "@/components/risk/RiskBadge";
import { SessionForm } from "@/components/session/SessionForm";
import { computeMockRisk } from "@/lib/mock-risk";
import type { MockRiskResult, SessionValues } from "@/types/session";

export function SessaoView() {
  const [result, setResult] = useState<MockRiskResult | null>(null);

  const handleAssess = (values: SessionValues) => {
    setResult(computeMockRisk(values));
  };

  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-10 dark:bg-zinc-950 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <header className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              HemoGuard UFSC
            </p>
            <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Sessão de hemodiálise
            </h1>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
              Preencha os campos e simule o nível de risco (protótipo).
            </p>
          </div>
          <Link
            href="/"
            className="text-sm font-medium text-zinc-700 underline-offset-4 hover:underline dark:text-zinc-300"
          >
            Voltar ao início
          </Link>
        </header>

        <main className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
          <SessionForm onAssess={handleAssess} />

          {result ? (
            <div className="mt-8 space-y-4 border-t border-zinc-200 pt-8 dark:border-zinc-700">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                  Resultado simulado:
                </span>
                <RiskBadge level={result.level} />
              </div>
              <AlertBanner level={result.level} message={result.hint} />
            </div>
          ) : null}
        </main>
      </div>
    </div>
  );
}
