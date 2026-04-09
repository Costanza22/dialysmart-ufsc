import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 py-10 font-sans dark:bg-zinc-950">
      <main className="w-full max-w-3xl rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <h1 className="text-2xl font-semibold leading-tight text-zinc-900 dark:text-zinc-50">
          DialySmart
        </h1>
        <p className="mt-2 text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          Predição de instabilidade hemodinâmica em hemodiálise
        </p>
        <p className="mt-3 text-zinc-700 dark:text-zinc-300">
          Projeto de mestrado (UFSC) para desenvolvimento e avaliação de um
          aplicativo com inteligência artificial aplicado ao contexto clínico da
          hemodiálise.
        </p>

        <section className="mt-8 grid gap-4 sm:grid-cols-2">
          <article className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-700">
            <h2 className="font-medium text-zinc-900 dark:text-zinc-100">
              Objetivo inicial
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              Estruturar um MVP para captura de dados clínicos, inferência e
              visualização de risco em interface web responsiva.
            </p>
          </article>
          <article className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-700">
            <h2 className="font-medium text-zinc-900 dark:text-zinc-100">
              Stack base
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              Next.js, TypeScript e Tailwind CSS, com estrutura pronta para
              futura integração com backend e modelo de IA.
            </p>
          </article>
        </section>

        <div className="mt-8 flex flex-col gap-3 text-sm text-zinc-600 dark:text-zinc-400">
          <Link
            href="/sessao"
            className="inline-flex w-fit items-center rounded-xl bg-zinc-900 px-4 py-2.5 font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
          >
            Abrir formulário da sessão (MVP)
          </Link>
          <p>
            Ou edite <code className="rounded bg-zinc-100 px-1 dark:bg-zinc-800">src/app/page.tsx</code>{" "}
            para ajustar esta página.
          </p>
        </div>
      </main>
    </div>
  );
}
