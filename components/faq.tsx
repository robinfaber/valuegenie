import {
  Bot,
  Calculator,
  ShieldCheck,
  Clock,
  DollarSign,
  HelpCircle,
} from "lucide-react";

const faq = [
  {
    icon: Bot,
    question: "How accurate is AI-powered valuation compared to traditional appraisals?",
    answer:
      "Our AI analyzes 15+ financial metrics, industry benchmarks, and recent comparable sales to provide valuations typically within 10-15% of traditional appraisals, but in minutes instead of weeks.",
  },
  {
    icon: Calculator,
    question: "What financial information do I need to provide?",
    answer:
      "You'll need basic financials like revenue, profit margins, expenses, and growth trends. We'll guide you through exactly what's needed and help interpret seller-provided data.",
  },
  {
    icon: Clock,
    question: "How long does it take to get my valuation report?",
    answer:
      "Most reports are generated within 30 minutes of submitting your information. Complex businesses may take up to 2 hours, but you'll always get results the same day.",
  },
  {
    icon: DollarSign,
    question: "Is $199 really cheaper than traditional appraisals?",
    answer:
      "Yes! Traditional business appraisals typically cost $5,000-$15,000 and take 2-6 weeks. Our AI-powered reports provide professional-grade analysis at a fraction of the cost.",
  },
  {
    icon: ShieldCheck,
    question: "What if the valuation doesn't match what I expected?",
    answer:
      "Our reports include detailed explanations of how we arrived at the valuation, plus red flags to watch for. We also provide negotiation strategies regardless of whether the price seems high or low.",
  },
  {
    icon: HelpCircle,
    question: "Do I still need a lawyer or accountant after using ValuationGenie?",
    answer:
      "ValuationGenie provides the financial analysis, but we always recommend having legal and tax professionals review any business purchase. Our reports actually help your advisors work more efficiently.",
  },
];

const FAQ = () => {
  return (
    <div
      id="faq"
      className="min-h-screen flex items-center justify-center px-6 py-12 xs:py-20 bg-white"
    >
      <div className="max-w-screen-lg">
        <h2 className="text-3xl xs:text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tight text-center">
          Common Questions from First-Time Buyers
        </h2>
        <p className="mt-3 xs:text-lg text-center text-muted-foreground">
          Everything you need to know about business valuation and our AI-powered approach.
        </p>

        <div className="mt-12 grid md:grid-cols-2 bg-background rounded-xl overflow-hidden outline outline-[1px] outline-border outline-offset-[-1px]">
          {faq.map(({ question, answer, icon: Icon }) => (
            <div key={question} className="border p-6 -mt-px -ml-px">
              <div className="h-8 w-8 xs:h-10 xs:w-10 flex items-center justify-center rounded-full bg-accent">
                <Icon className="h-4 w-4 xs:h-6 xs:w-6" />
              </div>
              <div className="mt-3 mb-2 flex items-start gap-2 text-lg xs:text-[1.35rem] font-semibold tracking-tight">
                <span>{question}</span>
              </div>
              <p className="text-sm xs:text-base">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
