import { Bold, Italic, Underline, Strikethrough, List, ListOrdered } from "lucide-react";

const features = [
  { icon: Bold, label: "Bold" },
  { icon: Italic, label: "Italic" },
  { icon: Underline, label: "Underline" },
  { icon: Strikethrough, label: "Strikethrough" },
  { icon: List, label: "Bullet points" },
  { icon: ListOrdered, label: "Numbered lists" },
];

const FeaturesSection = () => {
  return (
    <section className="bg-linear-to-b from-secondary/30 to-background py-16 lg:py-20">
      <div className="section-container">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-2xl font-semibold text-foreground sm:text-3xl">
            Supported formatting
          </h2>
          <p className="text-muted-foreground">
            Everything you need for professional-looking posts.
          </p>
        </div>

        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-4">
          {features.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group flex items-center gap-3 rounded-lg border border-border bg-card px-5 py-3 shadow-elevated transition-all duration-200 hover:border-premium/30 hover:shadow-premium"
            >
              <Icon className="h-5 w-5 text-premium transition-colors" />
              <span className="text-sm font-medium text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
