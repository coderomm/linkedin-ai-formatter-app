import { Shield, Zap, Eye, Brain } from "lucide-react";

const TrustSection = () => {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="section-container">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-6 text-2xl font-semibold text-foreground sm:text-3xl">
            How it works
          </h2>
          
          <p className="mb-12 text-lg leading-relaxed text-muted-foreground">
            This tool converts your text into special Transformed characters that 
            <span className="font-medium text-foreground"> look like bold, italic, or underlined text</span>. 
            LinkedIn treats them as regular characters, so the formatting stays intact. 
            Your message remains unchanged—only the way it displays is different.
          </p>

          <div className="grid gap-6 sm:grid-cols-3 md:grid-cols-4">
            <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-premium/30 hover:shadow-premium">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-premium-light transition-colors group-hover:bg-premium/10">
                <Zap className="h-6 w-6 text-premium" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">Instant</h3>
              <p className="text-muted-foreground">
                No signup. No waiting. Just paste and convert.
              </p>
            </div>

            <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-premium/30 hover:shadow-premium">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-premium-light transition-colors group-hover:bg-premium/10">
                <Brain className="h-6 w-6 text-premium" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">Smart AI</h3>
              <p className="text-muted-foreground">
                Our AI is smart enough to understand what exactly to transform.
              </p>
            </div>

            <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-premium/30 hover:shadow-premium">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-premium-light transition-colors group-hover:bg-premium/10">
                <Eye className="h-6 w-6 text-premium" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">Transparent</h3>
              <p className="text-muted-foreground">
                What you see is what gets posted. No surprises.
              </p>
            </div>

            <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-premium/30 hover:shadow-premium">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-premium-light transition-colors group-hover:bg-premium/10">
                <Shield className="h-6 w-6 text-premium" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">Private</h3>
              <p className="text-muted-foreground">
                Your content stays in your browser. Nothing is stored.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
