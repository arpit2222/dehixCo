import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is an AI-Verified Credential?",
    answer: "An AI-Verified Credential replaces the traditional resume. Instead of self-reported claims, our neural networks continuously evaluate and score your real-world performance data, providing dynamic, unforgeable proof of your skills."
  },
  {
    question: "How do Flash Organizations work?",
    answer: "Flash Organizations are computationally structured, cross-functional teams that form on demand. DEHIX uses an AI-driven squad assembly engine that analyzes verified performance data to automatically compute and deploy the optimal team for your specific project."
  },
  {
    question: "How does the AI prevent fake credentials?",
    answer: "Our models utilize predictive performance analytics and continuous real-time feedback loops. The system cross-references claims against actual deliverable outcomes, ensuring that only verified skills are recognized and algorithmically matched to new opportunities."
  },
  {
    question: "What powers the DEHIX AI Engine?",
    answer: "The DEHIX AI Engine is powered by proprietary neural matching algorithms trained on vast datasets of professional interactions, team dynamics, and project outcomes. This allows it to predict team compatibility and project success rates with high accuracy."
  }
];

export function FAQSection() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 text-pink-400 uppercase tracking-widest text-sm font-mono glow-text">
            FAQs
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-md">
            Frequently Asked Questions
          </h2>
          <p className="text-white/60 text-lg">
            Understand the core mechanics of the DEHIX AI engine.
          </p>
        </div>

        <Accordion className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-[#120a1f]/80 backdrop-blur-md border border-white/10 rounded-xl px-6 data-[state=open]:border-pink-500/30 transition-colors glow-card"
            >
              <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-pink-400 transition-colors py-6 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/60 text-base pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}