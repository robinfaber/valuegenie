import { Separator } from "@/components/ui/separator";
import { CircleCheck } from "lucide-react";
import { WaitlistForm } from "@/components/waitlist-form";

const plan = {
  name: "Professional Valuation",
  price: 199,
  description: "Everything you need for confident business buying decisions",
  features: [
    "AI-powered business valuation",
    "Comprehensive risk assessment", 
    "Negotiation strategy & talking points",
    "Comparable sales analysis",
    "30-day money-back guarantee",
    "Email support included",
  ],
  buttonText: "Join Waitlist",
  isPopular: true,
};

const Pricing = () => {

  return (
    <div
      id="pricing"
      className="flex flex-col items-center justify-center py-12 xs:py-20 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"
    >
      <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold text-center tracking-tight text-white">
        Simple, transparent pricing
      </h1>
      <p className="text-center text-lg text-blue-100 mt-4 max-w-2xl mx-auto">
        One comprehensive report that could save you tens of thousands
      </p>
      <div className="mt-12 max-w-md mx-auto">
        <div className="border border-blue-400/20 rounded-xl p-6 bg-white/10 backdrop-blur-sm">
          <h3 className="text-lg font-medium text-white">{plan.name}</h3>
          <p className="mt-2 text-4xl font-bold text-white">
            ${plan.price}
            <span className="ml-1.5 text-sm text-blue-200 font-normal">
              per report
            </span>
          </p>
          <p className="mt-4 font-medium text-blue-100">
            {plan.description}
          </p>
          
          <Separator className="my-8 bg-blue-400/20" />
          <ul className="space-y-2">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-1.5 text-white">
                <CircleCheck className="h-4 w-4 mt-1 text-green-400" />
                {feature}
              </li>
            ))}
          </ul>

          <Separator className="my-8 bg-blue-400/20" />
          <WaitlistForm
            placeholder="Enter your email for early access"
            buttonText={plan.buttonText}
            className="[&>div]:flex-col [&>div]:gap-4 [&_input]:w-full [&_input]:bg-white [&_input]:text-gray-900 [&_input]:border-none [&_button]:w-full [&_button]:text-base [&_button]:bg-white [&_button]:text-blue-700 [&_button]:hover:bg-blue-50"
          />
          <p className="mt-4 text-xs text-blue-200 text-center">
            We&apos;ll notify you when WorthSnap launches
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
