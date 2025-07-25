import { ArrowRight } from "lucide-react";
import { WaitlistForm } from "./waitlist-form";

export default function CTABanner() {

  return (
    <div className="w-full bg-gradient-to-br from-brand-primary via-brand-primary to-brand-secondary text-white py-20 px-6" style={{paddingBottom: '200px'}}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-headline-sm font-extrabold mb-6">
          Stay Independent in the Home You Love
        </h2>
        <p className="text-body font-normal text-blue-100 mb-8 max-w-2xl mx-auto">
          Simple modifications can prevent falls and help you live safely at home for years to come. Most safety issues are easy and affordable to fix once you know what to look for.
        </p>
        
        <div className="text-center mt-10">
          <button className="h-12 px-8 text-button bg-brand-secondary hover:bg-brand-primary text-white font-medium rounded-lg transition-colors inline-flex items-center gap-2 mb-4">
            Assess My Home Now
            <ArrowRight className="h-4 w-4" />
          </button>
          <p className="text-blue-100/80 text-body-sm font-normal">
            Takes 5 minutes • Complete privacy • Instant results
          </p>
        </div>
      </div>
    </div>
  );
}
