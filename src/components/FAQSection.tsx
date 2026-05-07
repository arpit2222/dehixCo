import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is an NFWT?",
    answer: "A Non-Fungible Wisdom Token (NFWT) is a specific type of Soulbound Token (SBT) used on the DEHIX platform. It permanently records oracle-verified professional achievements on-chain, effectively replacing self-reported resumes with unforgeable proof of skill."
  },
  {
    question: "How do Flash Organizations work?",
    answer: "Flash Organizations are computationally structured, cross-functional teams that form on demand. DEHIX uses an AI-driven squad assembly engine that reads verified NFWT data to automatically compute and deploy the optimal team for a specific project. Once the deliverables are met, the squad dissolves."
  },
  {
    question: "How does the protocol prevent fake credentials?",
    answer: "All credentials must be verified by a hybrid oracle network (comprising decentralised nodes and human validators). Under the Stake for Truth (SFT) protocol, oracles must stake DXUT tokens to participate. Honest attestations are rewarded, while false claims result in the slashing of staked tokens."
  },
  {
    question: "What is the utility of the DXUT token?",
    answer: "DXUT is the native utility token of the DEHIX platform. It is used as the payment medium for escrow deposits, required for staking in the SFT Protocol (by oracles and interviewers), and provides voting rights in the DEHIX DAO governance."
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
            Understand the core mechanics of the DEHIX coordination protocol.
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