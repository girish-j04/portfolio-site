import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Credible Data",
    location: "Boulder, CO",
    period: "September 2025 - April 2026",
    url: "https://atlas-frontend-dev-xqvglqziya-uc.a.run.app/",
    highlights: [
      "Built data platform in React/TypeScript/Node.js with 7 chart types and Malloy semantic query support",
      "Integrated Claude Agent SDK for autonomous AI data discovery with real-time streaming",
      "Designed multi-database architecture across PostgreSQL, Neo4j, and BigQuery",
      "Deployed containerized pnpm monorepo to GCP Cloud Run via GitHub Actions CI/CD",
    ],
  },
  {
    title: "AI Research Intern",
    company: "Leeds School of Business, CU Boulder",
    location: "Boulder, CO",
    period: "May 2025 - Dec 2025",
    highlights: [
      "Built multi-agent LLM advisory platform with React/FastAPI on GCP Cloud Run, serving 100+ concurrent users",
      "Integrated Gemini and Llama with live model switching via Kubernetes, achieving 2-3s response times",
      "Engineered RAG pipeline with context-aware memory, processing 20+ academic documents per session",
      "Cut student research onboarding time 40% through AI-assisted document summarization",
    ],
  },
  {
    title: "Software Engineer",
    company: "Wells Fargo",
    location: "Hyderabad, India",
    period: "July 2022 - July 2024",
    highlights: [
      "Scaled virtual assistant to 250,000+ enterprise users with 3s response times",
      "Built BERT intent recognition pipeline with 16 intents and 8 NER categories",
      "Achieved 95%+ test coverage with XUnit/Moq, cutting production bugs 40%",
      "Automated multi-environment CI/CD with Enterprise Pipeline, enabling same-day releases",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl mb-12 text-foreground">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-stone-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      {exp.title}
                      {exp.url && (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted hover:text-foreground transition-colors"
                          aria-label={`Visit ${exp.company}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {exp.url ? (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline underline-offset-2"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}{" "}
                      • {exp.location}
                    </CardDescription>
                  </div>
                  <span className="text-sm text-muted font-medium">{exp.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-muted leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-stone-300">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
