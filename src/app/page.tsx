export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 py-10 font-sans dark:bg-zinc-950">
      <main className="w-full max-w-3xl rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <h1 className="text-2xl font-semibold leading-tight text-zinc-900 dark:text-zinc-50">
          HemoGuard UFSC
        </h1>
        <p className="mt-2 text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          Predicao de instabilidade hemodinamica em hemodialise
        </p>
        <p className="mt-3 text-zinc-700 dark:text-zinc-300">
          Projeto de mestrado (UFSC) para desenvolvimento e avaliacao de um
          aplicativo com inteligencia artificial aplicado ao contexto clinico da
          hemodialise.
        </p>

        <section className="mt-8 grid gap-4 sm:grid-cols-2">
          <article className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-700">
            <h2 className="font-medium text-zinc-900 dark:text-zinc-100">
              Objetivo inicial
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              Estruturar um MVP para captura de dados clinicos, inferencia e
              visualizacao de risco em interface web responsiva.
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

        <div className="mt-8 text-sm text-zinc-600 dark:text-zinc-400">
          Edite <code>src/app/page.tsx</code> para começar o desenvolvimento.
        </div>
      </main>
    </div>
  );
}
