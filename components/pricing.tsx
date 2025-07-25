import { Separator } from "@/components/ui/separator";
import { CircleCheck } from "lucide-react";
import { WaitlistForm } from "@/components/waitlist-form";

const plans = [
  {
    name: "Free Safety Scan",
    price: 0,
    description: "Start with a basic assessment",
    features: [
      "Identify 3-5 critical safety issues",
      "Basic risk explanations",
      "Solution previews",
    ],
    buttonText: "Start Free Scan",
    isPopular: false,
  },
  {
    name: "Complete Safety Report",
    price: 39,
    description: "Full assessment with detailed solutions",
    features: [
      "All safety issues identified",
      "Detailed solutions with specific products",
      "Priority ranking (urgent vs. future planning)",
      "Professional PDF report",
      "Cost estimates for each recommendation",
      "Easy to share with family and contractors",
    ],
    buttonText: "Get Complete Report",
    isPopular: true,
    badge: "Most Popular",
  },
];

const Pricing = () => {

  return (
    <div
      id="pricing"
      className="flex flex-col items-center justify-center py-12 xs:py-20 px-6 bg-gradient-to-br from-brand-primary via-brand-primary to-brand-secondary"
    >
      <h1 className="text-headline-sm font-extrabold text-center tracking-tight text-white">
        Choose your assessment level
      </h1>
      <p className="text-center text-body font-normal text-blue-100 mt-4 max-w-2xl mx-auto">
        Start with a free scan or get a complete safety analysis for your home
      </p>
      <div className="mt-12 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className={`border rounded-xl p-6 backdrop-blur-sm relative ${
              plan.isPopular 
                ? 'border-yellow-400/50 bg-white/15 ring-2 ring-yellow-400/20' 
                : 'border-white/20 bg-white/10'
            }`}>
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">
                    {plan.badge}
                  </span>
                </div>
              )}
              
              <h3 className="text-subheading-sm font-semibold text-white">{plan.name}</h3>
              <p className="mt-2 text-headline-sm font-extrabold text-white">
                {plan.price === 0 ? 'Free' : `$${plan.price}`}
                {plan.price > 0 && (
                  <span className="ml-1.5 text-body-sm text-blue-100 font-normal">
                    one-time
                  </span>
                )}
              </p>
              <p className="mt-4 text-body font-medium text-blue-100">
                {plan.description}
              </p>
              
              <Separator className="my-8 bg-white/20" />
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-1.5 text-white text-body-sm font-normal">
                    <CircleCheck className="h-4 w-4 mt-1 text-green-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Separator className="my-8 bg-white/20" />
              <button className={`w-full h-12 text-button font-medium rounded-lg transition-colors ${
                plan.isPopular
                  ? 'bg-yellow-400 text-brand-primary hover:bg-yellow-300'
                  : 'bg-white text-brand-primary hover:bg-brand-accent'
              }`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
