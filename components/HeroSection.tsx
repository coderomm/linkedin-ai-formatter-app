import { Linkedin, Sparkles } from "lucide-react";
import PasteCTABtn from "./PasteCTABtn";

const HeroSection = () => {

  return (
    <section className="relative overflow-hidden bg-background pb-16 pt-20 lg:pb-24 lg:pt-28">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-linear-to-b from-linkedin-light/50 to-transparent" />

      <div className="section-container relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Premium Badge */}
          <div className="mb-6 inline-flex animate-fade-up items-center gap-2 rounded-full border border-premium/30 bg-linear-to-r from-premium-light to-premium-light/50 px-4 py-2 text-sm font-medium text-premium shadow-premium">
            <Sparkles className="h-4 w-4 text-premium" />
            <span>Premium formatting for LinkedIn creators</span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 animate-fade-up text-4xl font-bold leading-tight tracking-tight text-foreground [animation-delay:100ms] sm:text-5xl lg:text-6xl">
            Your AI post looks <span className="text-premium">great</span>.
            <br />
            <span className="text-muted-foreground">Until you paste it into</span><span className="text-muted-foreground"> LinkedIn</span>
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-premium to-premium/80 shadow-premium my-auto ms-2">
              <Linkedin className="h-5 w-5 text-white" />
            </div>
          </h1>

          {/* Subtext */}
          <p className="mx-auto mb-10 max-w-xl animate-fade-up text-lg text-muted-foreground [animation-delay:200ms] sm:text-xl">
            𝗕𝗼𝗹𝗱, 𝙞𝙩𝙖𝙡𝙞𝙘𝙨, bullet points—gone. This tool preserves your formatting so your posts look exactly as intended.
          </p>

          {/* CTAs */}
          <div className="flex animate-fade-up flex-col items-center gap-4 [animation-delay:300ms] sm:flex-row sm:justify-center">
            <PasteCTABtn />
          </div>

          {/* Hint text */}
          <p className="mt-6 animate-fade-up text-sm text-muted-foreground [animation-delay:400ms]">
            Works with content from
            <span className="italic"> ChatGPT</span>
            ,
            <span className="italic"> Claude</span>
            ,
            <span className="italic"> Gemini</span>
            , etc,
            <span className="italic"> Notion</span>
            ,
            <span className="italic"> Google Docs</span>
            , etc
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
