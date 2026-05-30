"use client";

import { useState } from "react";

type AnalysisResult = {
  matchingSkills: string[];
  missingKeywords: string[];
  resumeSuggestions: string[];
};

export default function AnalyzePage() {
  const [jobDescription, setJobDescription] = useState("");
  const [resume, setResume] = useState("");
  const [result, setResult] = useState<AnalysisResult | null>(null);

  function handleAnalyze() {
    if (!jobDescription.trim() || !resume.trim()) {
      alert("Please paste both a job description and your resume.");
      return;
    }

    const mockResult: AnalysisResult = {
      matchingSkills: ["TypeScript", "React", "API development"],
      missingKeywords: ["Cloud deployment", "Testing", "Database design"],
      resumeSuggestions: [
        "Emphasize full-stack project work.",
        "Add stronger technical keywords from the job description.",
        "Make bullet points more impact-focused.",
      ],
    };

    setResult(mockResult);
  }

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
              value={jobDescription}
              onChange={(event) => setJobDescription(event.target.value)}
              className="mt-2 h-80 w-full rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm text-white outline-none focus:border-blue-500"
              placeholder="Paste the job description here..."
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-200">
              Resume
            </label>

            <textarea
              value={resume}
              onChange={(event) => setResume(event.target.value)}
              className="mt-2 h-80 w-full rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm text-white outline-none focus:border-blue-500"
              placeholder="Paste your resume here..."
            />
          </div>
        </div>

        <button
          onClick={handleAnalyze}
          className="mt-6 rounded-xl bg-blue-500 px-5 py-3 font-medium text-white hover:bg-blue-600"
        >
          Analyze
        </button>

        <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-semibold">Results</h2>

          {!result ? (
            <p className="mt-2 text-slate-400">
              Your analysis results will appear here after you click Analyze.
            </p>
          ) : (
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <ResultCard title="Matching Skills" items={result.matchingSkills} />
              <ResultCard title="Missing Keywords" items={result.missingKeywords} />
              <ResultCard title="Resume Suggestions" items={result.resumeSuggestions} />
            </div>
          )}
        </section>
      </section>
    </main>
  );
}

function ResultCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
      <h3 className="font-semibold text-blue-400">{title}</h3>

      <ul className="mt-3 space-y-2 text-sm text-slate-300">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}