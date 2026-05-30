import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const { jobDescription, resume } = body;

  if (!jobDescription || !resume) {
    return NextResponse.json(
      { error: "Job description and resume are required." },
      { status: 400 }
    );
  }

  const mockResult = {
    matchingSkills: ["TypeScript", "React", "API development"],
    missingKeywords: ["Cloud deployment", "Testing", "Database design"],
    resumeSuggestions: [
      "Emphasize full-stack project work.",
      "Add stronger technical keywords from the job description.",
      "Make bullet points more impact-focused.",
    ],
  };

  return NextResponse.json(mockResult);
}