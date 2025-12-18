import { X } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            The formatting frustration
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            You spend time crafting the perfect structure. Then LinkedIn strips it all away.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* What you write */}
          <div className="group relative">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">What you write</span>
              <span className="rounded-full bg-linkedin-light px-2 py-0.5 text-xs font-medium text-linkedin">
                In ChatGPT
              </span>
            </div>
            <div className="card-elevated h-full p-6 transition-shadow duration-300 group-hover:shadow-elevated-md">
              <div className="space-y-4 font-sans text-foreground">
                <p>
                  <span className="font-bold">3 lessons</span> I learned after posting on LinkedIn for 90 days:
                </p>
                <ul className="ml-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span><span className="font-bold">Consistency</span> beats perfection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span><span className="italic">Engagement</span> comes from stories, not tips</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span><span className="underline">Your network</span> is your net worth</span>
                  </li>
                </ul>
                <p className="text-muted-foreground">
                  The secret? <span className="font-bold italic">Just start.</span>
                </p>
              </div>
            </div>
          </div>

          {/* What LinkedIn shows */}
          <div className="group relative">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">What LinkedIn shows</span>
              <div className="flex items-center gap-1 rounded-full bg-destructive/10 px-2 py-0.5 text-xs font-medium text-destructive">
                <X className="h-3 w-3" />
                Formatting lost
              </div>
            </div>
            <div className="card-elevated h-full border-destructive/20 p-6 transition-shadow duration-300 group-hover:shadow-elevated-md">
              <div className="space-y-4 font-sans text-muted-foreground">
                <p>3 lessons I learned after posting on LinkedIn for 90 days:</p>
                <p>• Consistency beats perfection</p>
                <p>• Engagement comes from stories, not tips</p>
                <p>• Your network is your net worth</p>
                <p>The secret? Just start.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
