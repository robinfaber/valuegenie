import {
  Brain,
  Lock,
  Home,
  ClipboardList,
} from "lucide-react";
import React from "react";

const features = [
  {
    icon: Brain,
    title: "AI Hazard Detection",
    description:
      "Our AI spots fall risks and safety issues that are easy to overlook in familiar spaces, identifying potential hazards before they cause accidents.",
  },
  {
    icon: Lock,
    title: "Private & Convenient",
    description:
      "Assess your home on your schedule without scheduling appointments or home visits. Complete privacy with no strangers required.",
  },
  {
    icon: Home,
    title: "Room-by-Room Analysis",
    description:
      "Comprehensive review of your bathroom, kitchen, stairs, and living areas to ensure every space supports safe aging in place.",
  },
  {
    icon: ClipboardList,
    title: "Clear Action Plan",
    description:
      "Specific recommendations with cost estimates so you can prioritize improvements and make informed decisions about your home safety.",
  },
];

const Features = () => {
  return (
    <div id="features" className="w-full py-12 xs:py-20 px-6 bg-brand-accent">
      <h2 className="text-headline-sm font-extrabold tracking-tight text-center text-brand-text">
        Comprehensive home safety assessment made simple
      </h2>
      <p className="text-center text-body font-normal text-brand-text/80 mt-4 max-w-2xl mx-auto">
        Identify fall risks and safety hazards in your home with AI-powered analysis and expert recommendations
      </p>
      <div className="w-full max-w-screen-lg mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col bg-white border border-brand-accent rounded-xl py-6 px-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="mb-3 h-10 w-10 flex items-center justify-center bg-brand-accent rounded-full">
              <feature.icon className="h-6 w-6 text-brand-primary" />
            </div>
            <span className="text-subheading-sm font-semibold text-brand-text">{feature.title}</span>
            <p className="mt-1 text-brand-text/80 text-body-sm font-normal">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
