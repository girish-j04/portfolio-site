import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "MLOps Platform",
    description: "End-to-end model training and deployment infrastructure",
    url: "https://github.com/girish-j04/MLOps-pipeline",
    technologies: ["MLflow", "DVC", "FastAPI", "Docker", "GitHub Actions", "Prometheus", "Grafana"],
    highlights: [
      "Cut model deployment time from days to 15 minutes via automated CI/CD",
      "Engineered FastAPI serving with A/B testing at 1,000 req/sec and <50ms p95 latency",
      "Integrated Prometheus/Grafana with automated drift detection and one-click rollback",
    ],
  },
  {
    title: "Optimized LLM Inference Engine",
    description: "High-performance language model serving infrastructure",
    technologies: ["vLLM", "PyTorch", "FastAPI", "WebSockets", "Docker", "CUDA"],
    highlights: [
      "Optimized Llama-3-8B on CUDA with vLLM, achieving 3x throughput improvement",
      "Applied INT8/INT4 quantization and Flash Attention 2, cutting GPU memory 60%",
      "Deployed streaming FastAPI server with WebSockets serving 50+ concurrent users at <200ms TTFT",
    ],
  },
  {
    title: "GradCompass",
    description: "AI-powered graduate application assistant with specialized agents",
    technologies: ["React", "FastAPI", "PostgreSQL", "Google Gemini", "RAG"],
    highlights: [
      "Built platform with 6 specialized LLM agents serving 20+ testers across 2,000+ universities",
      "Architected FastAPI backend with PostgreSQL, Google OAuth, and SQLAlchemy ORM",
      "Built AI visa interview simulator with Gemini API and speech-to-text at 2s response times",
    ],
  },
  {
    title: "Cine-Stellation",
    description: "Interactive movie recommendation engine with visual discovery",
    url: "https://github.com/girish-j04/cine-stellation",
    technologies: ["Next.js", "FastAPI", "TF-IDF", "MongoDB", "HTML5 Canvas"],
    highlights: [
      "Built TF-IDF recommendation engine across 9,600+ films at 90% accuracy and <1s query response",
      "Developed Next.js frontend with real-time HTML5 Canvas constellation graphs",
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl mb-12 text-foreground">Selected Projects</h2>
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="flex items-center gap-2 group-hover:text-stone-600 transition-colors">
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline underline-offset-2 flex items-center gap-2"
                        >
                          {project.title}
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        project.title
                      )}
                    </CardTitle>
                    <CardDescription className="mt-1">{project.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="default" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <ul className="space-y-1.5">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-muted leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:rounded-full before:bg-stone-300">
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
