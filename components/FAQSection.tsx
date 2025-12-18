import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs: {
  question: string
  answer: string
}[] = [
    {
      question: "How does this tool preserve formatting on LinkedIn?",
      answer:
        "We convert your formatted text into special transformer characters that visually appear as bold, italic, or styled text. LinkedIn displays these characters naturally, so your formatting stays intact without any platform tricks.",
    },
    {
      question: "Will this affect my post's reach or engagement?",
      answer:
        "No. LinkedIn treats these characters like regular text. There's no impact on the algorithm, reach, or how your post is distributed. It simply looks better.",
    },
    {
      question: "What AI tools does this work with?",
      answer:
        "Any tool that produces formatted text—ChatGPT, Claude, Notion, Google Docs, and more. If it has bold, italics, or lists, we can preserve it.",
    },
    {
      question: "Is my content stored or shared?",
      answer:
        "No. Everything happens in your browser. We don't store, track, or share your content. It never leaves your device.",
    },
    {
      question: "Do I need to create an account?",
      answer:
        "No account needed. Just paste your content and copy the result. It's that simple.",
    },
    {
      question: "What formatting types are supported?",
      answer:
        "Bold, italic, underline, strikethrough, bullet points, and numbered lists. These are the most common formats used in LinkedIn posts.",
    },
    {
      question: "Is this tool free?",
      answer: "Yes. This formatting tool is entirely free, without any hidden charges or registrations."
    }
  ];

const FAQSection = () => {
  return (
    <section className="bg-linear-to-b from-background to-premium-light/30 py-16 lg:py-24">
      <div className="section-container">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-premium/20 bg-premium-light px-4 py-1.5 text-sm font-medium text-premium">
              FAQ
            </div>
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Frequently asked questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border bg-card px-6 shadow-elevated data-[state=open]:border-premium/30 data-[state=open]:shadow-premium transition-all duration-200"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline hover:text-premium py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
