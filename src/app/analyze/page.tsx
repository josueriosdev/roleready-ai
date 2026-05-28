export default function AnalyzePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8">
          <a href="/" className="text-sm text-blue-400 hover:text-blue-300">
            ← Back home
          </a>

          <h1 className="mt-6 text-4xl font-bold">
            Job + Resume Analyzer
          </h1>

          <p className="mt-3 max-w-2xl text-slate-300">
            Paste a job description and your resume. RoleReady AI will help find
            matching skills, missing keywords, and resume improvement ideas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-slate-200">
              Job Description
            </label>

            <textarea
              className="mt-2 h-80 w-full rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm text-white outline-none focus:border-blue-500"
              placeholder="Paste the job description here..."
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-200">
              Resume
            </label>

            <textarea
              className="mt-2 h-80 w-full rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm text-white outline-none focus:border-blue-500"
              placeholder="Paste your resume here..."
            />
          </div>
        </div>

        <button className="mt-6 rounded-xl bg-blue-500 px-5 py-3 font-medium text-white hover:bg-blue-600">
          Analyze
        </button>

        <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-semibold">Results</h2>
          <p className="mt-2 text-slate-400">
            Your analysis results will appear here after we connect the AI API.
          </p>
        </section>
      </section>
    </main>
  );
}