import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ShaderAnimation } from "@/components/ui/shader-animation";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      <ShaderAnimation className="absolute inset-0 -z-10 opacity-80" />
      <div className="max-w-3xl mx-auto text-center">
        <div className="space-y-6 animate-fade-in">
          <Badge variant="secondary" className="mb-4">
            Available for opportunities
          </Badge>
          
          <h1 className="font-display text-5xl md:text-7xl tracking-tight text-foreground leading-[1.1]">
            Girish Jeswani
          </h1>
          
          <p className="text-xl md:text-2xl text-muted font-light max-w-2xl mx-auto leading-relaxed">
            Software Engineer & AI Researcher crafting intelligent systems at the intersection of machine learning and human experience
          </p>
          
          <div className="flex items-center justify-center gap-4 pt-4">
            <a
              href="https://github.com/girish-j04"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/gjeswani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:girishjeswaniwork@gmail.com"
              className="p-2 text-muted hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-5 h-5 text-muted" />
        </div>
      </div>
    </section>
  );
}
