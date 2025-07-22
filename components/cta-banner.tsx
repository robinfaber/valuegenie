import { ArrowRight } from "lucide-react";
import { WaitlistForm } from "./waitlist-form";

export default function CTABanner() {

  return (
    <div className="w-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 px-6" style={{paddingBottom: '200px'}}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Ready to buy with confidence?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Don&apos;t let inexperience cost you thousands. Get professional-grade analysis at a fraction of the cost.
        </p>
        
        <div className="max-w-lg mx-auto mt-12">
          <WaitlistForm
            placeholder="Enter your email"
            buttonText="Join Waitlist"
            buttonIcon={<ArrowRight className="ml-1 h-4 w-4" />}
            className="[&_input]:h-12 [&_input]:text-base [&_input]:bg-white [&_input]:text-gray-900 [&_button]:h-12 [&_button]:px-8 [&_button]:text-base [&_button]:bg-blue-500 [&_button]:hover:bg-blue-400 [&_button]:font-semibold"
          />
        </div>
      </div>
    </div>
  );
}
