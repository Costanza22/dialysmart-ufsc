import type { Metadata } from "next";
import { SessaoView } from "./SessaoView";

export const metadata: Metadata = {
  title: "Sessão | DialySmart",
  description:
    "Formulário de sessão de hemodiálise e simulação heurística de risco (MVP de pesquisa).",
};

export default function SessaoPage() {
  return <SessaoView />;
}
