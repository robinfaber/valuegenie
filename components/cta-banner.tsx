"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

export default function CTABanner() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div className="w-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 px-6" style={{paddingBottom: '200px'}}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Ready to buy with confidence?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Don't let inexperience cost you thousands. Get professional-grade analysis at a fraction of the cost.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mt-12">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 h-12 px-4 text-base bg-white text-gray-900 border-none rounded-lg"
          />
          <Button
            onClick={handleSubmit}
            size="lg"
            className="w-full sm:w-auto h-12 px-8 text-base bg-blue-500 hover:bg-blue-400 text-white rounded-lg font-semibold"
          >
            Join Waitlist <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
