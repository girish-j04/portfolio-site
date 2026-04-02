import { Mail, Github, Linkedin, Globe } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl mb-6 text-foreground">Get in Touch</h2>
        <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
          I am always open to discussing new projects, research opportunities, or just chatting about 
          the future of AI infrastructure.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="mailto:girishjeswaniwork@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-stone-700 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Send an Email
          </a>
          <a
            href="https://girishjeswani.work/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full font-medium hover:bg-accent-light transition-colors"
          >
            <Globe className="w-4 h-4" />
            Visit Website
          </a>
        </div>
        
        <div className="flex items-center justify-center gap-6 pt-8 border-t border-border">
          <a
            href="https://github.com/girish-j04"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors flex items-center gap-2 text-sm"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/gjeswani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors flex items-center gap-2 text-sm"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
        
        <p className="mt-12 text-sm text-muted">
          © 2025 Girish Jeswani. Built with care in Boulder, Colorado.
        </p>
      </div>
    </section>
  );
}
