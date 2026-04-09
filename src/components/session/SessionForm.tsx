"use client";

import { useState, type FormEvent } from "react";
import type { SessionValues } from "@/types/session";

const defaultValues: SessionValues = {
  pasSistolica: 130,
  pasDiastolica: 80,
  fc: 78,
  ultrafiltrationMlPerH: 400,
  interdialyticGainKg: 2.2,
  dryWeightKg: 68,
};

type SessionFormProps = {
  onAssess: (values: SessionValues) => void;
};

function Field({
  id,
  label,
  unit,
  value,
  min,
  max,
  step,
  onChange,
}: {
  id: string;
  label: string;
  unit: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
        {label}
        <span className="ml-1 font-normal text-zinc-500">({unit})</span>
      </label>
      <input
        id={id}
        type="number"
        min={min}
        max={max}
        step={step}
        value={Number.isNaN(value) ? "" : value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm outline-none focus:border-zinc-500 focus:ring-2 focus:ring-zinc-400/30 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100"
      />
    </div>
  );
}

export function SessionForm({ onAssess }: SessionFormProps) {
  const [values, setValues] = useState<SessionValues>(defaultValues);

  const update = <K extends keyof SessionValues>(key: K, n: number) => {
    setValues((prev) => ({ ...prev, [key]: Number.isFinite(n) ? n : prev[key] }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onAssess(values);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 sm:grid-cols-2"
    >
      <Field
        id="pas-sys"
        label="PAS"
        unit="mmHg"
        value={values.pasSistolica}
        min={60}
        max={220}
        step={1}
        onChange={(n) => update("pasSistolica", n)}
      />
      <Field
        id="pas-dia"
        label="PAD"
        unit="mmHg"
        value={values.pasDiastolica}
        min={30}
        max={130}
        step={1}
        onChange={(n) => update("pasDiastolica", n)}
      />
      <Field
        id="fc"
        label="Frequência cardíaca"
        unit="bpm"
        value={values.fc}
        min={40}
        max={180}
        step={1}
        onChange={(n) => update("fc", n)}
      />
      <Field
        id="uf"
        label="Taxa de ultrafiltração"
        unit="mL/h"
        value={values.ultrafiltrationMlPerH}
        min={0}
        max={1200}
        step={10}
        onChange={(n) => update("ultrafiltrationMlPerH", n)}
      />
      <Field
        id="gain"
        label="Ganho interdialítico"
        unit="kg"
        value={values.interdialyticGainKg}
        min={0}
        max={8}
        step={0.1}
        onChange={(n) => update("interdialyticGainKg", n)}
      />
      <Field
        id="dry"
        label="Peso seco (estimado)"
        unit="kg"
        value={values.dryWeightKg}
        min={30}
        max={150}
        step={0.1}
        onChange={(n) => update("dryWeightKg", n)}
      />

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full rounded-xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
        >
          Simular avaliação de risco (mock)
        </button>
        <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
          Dados ilustrativos. Não utilizar para decisão clínica.
        </p>
      </div>
    </form>
  );
}
