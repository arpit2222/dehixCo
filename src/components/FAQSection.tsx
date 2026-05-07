import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is DXUT?",
    answer: "DXUT is the native utility token of the Dehix platform. It is designed to reward users for their contributions and active participation within the community."
  },
  {
    question: "How do I participate in Dehix?",
    answer: "You can participate by joining our community, contributing to web3 projects, hosting events, or raising funds for your initiatives."
  },
  {
    question: "Are there any fees?",
    answer: "Platform usage is largely free for basic features. Advanced features like DAO creation and certain fundraising capabilities may have minimal network fees associated with the underlying blockchain."
  },
  {
    question: "What is the Dehix Learn program?",
    answer: "Dehix Learn is an initiative where we collaborate with web3 projects to create educational content aimed at upskilling learners in the web3 space."
  }
];

export function FAQSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 text-pink-400 uppercase tracking-widest text-sm font-semibold">
            <span className="w-8 h-[1px] bg-pink-400"></span>
            FAQs
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-white/60 text-lg">
            Find answers to common questions about Dehix and our ecosystem.
          </p>
        </div>

        <Accordion className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-[#120a1f] border border-white/5 rounded-2xl px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-pink-400 transition-colors py-6 hover:no-underline">
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