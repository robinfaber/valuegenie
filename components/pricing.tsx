"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { CircleCheck, Mail } from "lucide-react";
import { useState } from "react";

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
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div
      id="pricing"
      className="flex flex-col items-center justify-center py-12 xs:py-20 px-6"
    >
      <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold text-center tracking-tight">
        Simple, transparent pricing
      </h1>
      <p className="text-center text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
        One comprehensive report that could save you tens of thousands
      </p>
      <div className="mt-12 max-w-md mx-auto">
        <div className="border rounded-xl p-6 bg-background">
          <h3 className="text-lg font-medium">{plan.name}</h3>
          <p className="mt-2 text-4xl font-bold">
            ${plan.price}
            <span className="ml-1.5 text-sm text-muted-foreground font-normal">
              per report
            </span>
          </p>
          <p className="mt-4 font-medium text-muted-foreground">
            {plan.description}
          </p>
          
          <Separator className="my-8" />
          <ul className="space-y-2">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-1.5">
                <CircleCheck className="h-4 w-4 mt-1 text-green-600" />
                {feature}
              </li>
            ))}
          </ul>

          <Separator className="my-8" />
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email for early access"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
            <Button type="submit" size="lg" className="w-full text-base bg-blue-600 hover:bg-blue-700">
              <Mail className="mr-2 h-4 w-4" />
              {plan.buttonText}
            </Button>
          </form>
          <p className="mt-4 text-xs text-muted-foreground text-center">
            We'll notify you when ValuationGenie launches
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
