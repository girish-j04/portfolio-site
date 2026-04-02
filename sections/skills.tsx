import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C#", "C++", "Dart"],
  },
  {
    title: "Frameworks",
    skills: ["React", "Next.js", "FastAPI", "Node.js", "Spring Boot", "Flask", "Express", "Angular"],
  },
  {
    title: "Machine Learning",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Transformers", "RAG", "NumPy", "Pandas"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Neo4j", "BigQuery"],
  },
  {
    title: "Infrastructure",
    skills: ["Docker", "Kubernetes", "GCP", "AWS", "CI/CD", "Linux", "Azure"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl mb-12 text-foreground">Skills</h2>
        <div className="space-y-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-3">
              <h3 className="text-sm font-medium text-foreground uppercase tracking-wider">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm py-1.5 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
