export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl mb-8 text-foreground">About</h2>
        <div className="prose prose-stone prose-lg max-w-none">
          <p className="text-muted leading-relaxed text-lg">
            I am currently pursuing my M.S. in Computer Science at the University of Colorado Boulder, 
            where I also conduct AI research at the Leeds School of Business. My work focuses on 
            building multi-agent LLM systems and production-grade MLOps infrastructure.
          </p>
          <p className="text-muted leading-relaxed text-lg mt-4">
            Previously, I spent two years at Wells Fargo scaling virtual assistants to a quarter-million 
            enterprise users, and I am currently building data platforms at Credible Data that make 
            complex analytics accessible to everyone. I care deeply about performance, reliability, 
            and the craft of writing clean, maintainable code.
          </p>
          <p className="text-muted leading-relaxed text-lg mt-4">
            When I am not coding, you will find me optimizing LLM inference engines or exploring 
            the frontiers of RAG systems. I believe the best software feels invisible: it just works, 
            beautifully.
          </p>
        </div>
      </div>
    </section>
  );
}
