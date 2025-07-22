import React from "react";
import { WaitlistForm } from "@/components/waitlist-form";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-20 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white -mt-16 pt-32">
      <div className="text-center max-w-6xl">
        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold !leading-[1.1] tracking-tight">
          Don't Overpay $50K+
          <br />
          <span className="block text-blue-200">on Your First Business Purchase</span>
        </h1>
        <p className="mt-8 text-xl xs:text-2xl text-blue-100 max-w-4xl mx-auto">
          Get AI-powered business valuation and negotiation strategy in 30 minutes
          <br />
          instead of paying $5,000+ for traditional appraisals
        </p>
        
        <div className="mt-12 max-w-lg mx-auto">
          <WaitlistForm
            placeholder="Enter your email"
            buttonText="Get Early Access"
            className="[&_input]:h-12 [&_input]:text-base [&_input]:bg-white [&_input]:text-gray-900 [&_button]:h-12 [&_button]:px-8 [&_button]:text-base [&_button]:bg-blue-500 [&_button]:hover:bg-blue-400 [&_button]:font-semibold"
          />
        </div>
        
        <p className="mt-6 text-blue-200 text-base">
          Join <span className="font-bold text-yellow-400">2,847</span> smart buyers on our waitlist
        </p>
      </div>
    </div>
  );
};

export default Hero;
