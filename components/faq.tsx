import {
  Target,
  Home,
  Camera,
  DollarSign,
  Shield,
  Users,
} from "lucide-react";

const faq = [
  {
    icon: Target,
    question: "How accurate is the AI assessment?",
    answer:
      "Our AI achieves 85%+ accuracy by following professional occupational therapy guidelines and analyzing thousands of home safety scenarios. It's trained on real safety assessments and continuously improved by expert review.",
  },
  {
    icon: Home,
    question: "I think my home is already safe - do I still need this?",
    answer:
      "Many safety hazards are invisible in familiar spaces. We often overlook risks in homes we know well - loose rugs, poor lighting, or grab bar placement issues. Fresh AI analysis can spot what familiarity causes us to miss.",
  },
  {
    icon: Camera,
    question: "What kind of photos do I need to take?",
    answer:
      "Any smartphone camera works perfectly. We provide simple guidance for each room - just basic shots of entryways, bathrooms, stairs, and living areas. No special equipment or photography skills needed.",
  },
  {
    icon: DollarSign,
    question: "How is this different from hiring a professional?",
    answer:
      "Professional assessments cost $300-$500 and require scheduling home visits. Our AI assessment costs $39, provides instant results, and maintains complete privacy. You get the same quality insights without strangers in your home.",
  },
  {
    icon: Shield,
    question: "What happens to my photos after the assessment?",
    answer:
      "Your privacy is paramount. Photos are analyzed by our secure AI system and then permanently deleted within 24 hours. We never store, share, or use your images for any other purpose.",
  },
  {
    icon: Users,
    question: "Can I share the results with my family?",
    answer:
      "Absolutely! The report is designed for easy sharing and discussion. Many families use it to have productive conversations about safety improvements and to coordinate with contractors for implementation.",
  },
];

const FAQ = () => {
  return (
    <div
      id="faq"
      className="min-h-screen flex items-center justify-center px-6 py-12 xs:py-20 bg-white"
    >
      <div className="max-w-screen-lg">
        <h2 className="text-headline-sm !leading-[1.15] font-extrabold tracking-tight text-center text-brand-text">
          Common Questions About Home Safety Assessments
        </h2>
        <p className="mt-3 text-body font-normal text-center text-brand-text/80">
          Everything you need to know about AI-powered home safety assessments and aging in place.
        </p>

        <div className="mt-12 grid md:grid-cols-2 bg-brand-accent rounded-xl overflow-hidden outline outline-[1px] outline-brand-accent outline-offset-[-1px] shadow-sm">
          {faq.map(({ question, answer, icon: Icon }) => (
            <div key={question} className="border border-white/50 bg-white p-6 -mt-px -ml-px hover:shadow-md transition-shadow">
              <div className="h-8 w-8 xs:h-10 xs:w-10 flex items-center justify-center rounded-full bg-brand-accent">
                <Icon className="h-4 w-4 xs:h-6 xs:w-6 text-brand-primary" />
              </div>
              <div className="mt-3 mb-2 flex items-start gap-2 text-subheading-sm font-semibold tracking-tight text-brand-text">
                <span>{question}</span>
              </div>
              <p className="text-body-sm font-normal text-brand-text/80">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
