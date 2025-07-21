import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-20 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white -mt-16 pt-32">
      <div className="text-center max-w-6xl">
        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold !leading-[1.1] tracking-tight">
          Don't Overpay $50K+
          <br />
          on Your First Business Purchase
        </h1>
        <p className="mt-8 text-xl xs:text-2xl text-blue-100 max-w-4xl mx-auto">
          Get AI-powered business valuation and negotiation strategy in 30 minutes
          <br />
          instead of paying $5,000+ for traditional appraisals
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 h-12 px-4 text-base bg-white text-gray-900 border-none rounded-lg"
          />
          <Button
            size="lg"
            className="w-full sm:w-auto h-12 px-8 text-base bg-blue-500 hover:bg-blue-400 text-white rounded-lg font-semibold"
          >
            Get Early Access
          </Button>
        </div>
        
        <p className="mt-6 text-blue-200 text-base">
          Join <span className="font-bold text-yellow-400">2,847</span> smart buyers on our waitlist
        </p>
      </div>
    </div>
  );
};

export default Hero;
