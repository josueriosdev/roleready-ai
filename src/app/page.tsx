export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-20">
        <p className="text-sm font-semibold text-blue-400">
          RoleReady AI
        </p>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
          Tailor your resume and prep smarter for SWE jobs.
        </h1>

        <p className="max-w-2xl text-lg text-slate-300">
          Paste a job description and your resume. RoleReady AI helps you find
          missing skills, improve bullet points, and create a company-specific
          interview prep plan.
        </p>

        <div className="flex gap-3">
          <a
            href="/analyze"
            className="rounded-xl bg-blue-500 px-5 py-3 font-medium text-white hover:bg-blue-600"
          >
            Analyze a Job
          </a>

          <a
            href="/company-prep"
            className="rounded-xl border border-slate-700 px-5 py-3 font-medium text-slate-200 hover:bg-slate-900"
          >
            Company Prep
          </a>
        </div>
      </section>
    </main>
  );
}