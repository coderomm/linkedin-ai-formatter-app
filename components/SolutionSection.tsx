import { Check } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="bg-secondary/30 py-16 lg:py-24">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Formatting that actually works
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Convert your text once. Paste it anywhere. It just works.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* After using this tool */}
          <div className="group relative">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">After using this tool</span>
              <span className="rounded-full bg-success-light px-2 py-0.5 text-xs font-medium text-success">
                Converted
              </span>
            </div>
            <div className="card-elevated border-success/20 p-6 transition-shadow duration-300 group-hover:shadow-elevated-md">
              <div className="space-y-4 font-sans text-foreground">
                <p>
                  <span className="font-bold">𝟯 𝗹𝗲𝘀𝘀𝗼𝗻𝘀</span> I learned after posting on LinkedIn for 90 days:
                </p>
                <ul className="ml-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span><span className="font-bold">𝗖𝗼𝗻𝘀𝗶𝘀𝘁𝗲𝗻𝗰𝘆</span> beats perfection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span><span className="italic">𝘌𝘯𝘨𝘢𝘨𝘦𝘮𝘦𝘯𝘵</span> comes from stories, not tips</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span><span className="underline">Y̲o̲u̲r̲ ̲n̲e̲t̲w̲o̲r̲k̲</span> is your net worth</span>
                  </li>
                </ul>
                <p className="text-muted-foreground">
                  The secret? <span className="font-bold">𝙅𝙪𝙨𝙩 𝙨𝙩𝙖𝙧𝙩.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Posted on LinkedIn */}
          <div className="group relative">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">Posted on LinkedIn</span>
              <div className="flex items-center gap-1 rounded-full bg-success-light px-2 py-0.5 text-xs font-medium text-success">
                <Check className="h-3 w-3" />
                Looks perfect
              </div>
            </div>
            <div className="card-elevated border-success/20 p-6 transition-shadow duration-300 group-hover:shadow-elevated-md">
              <div className="space-y-4 font-sans text-foreground">
                <p>
                  <span className="font-bold">𝟯 𝗹𝗲𝘀𝘀𝗼𝗻𝘀</span> I learned after posting on LinkedIn for 90 days:
                </p>
                <ul className="ml-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span><span className="font-bold">𝗖𝗼𝗻𝘀𝗶𝘀𝘁𝗲𝗻𝗰𝘆</span> beats perfection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span><span className="italic">𝘌𝘯𝘨𝘢𝘨𝘦𝘮𝘦𝘯𝘵</span> comes from stories, not tips</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span><span className="underline">Y̲o̲u̲r̲ ̲n̲e̲t̲w̲o̲r̲k̲</span> is your net worth</span>
                  </li>
                </ul>
                <p className="text-muted-foreground">
                  The secret? <span className="font-bold">𝙅𝙪𝙨𝙩 𝙨𝙩𝙖𝙧𝙩.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
