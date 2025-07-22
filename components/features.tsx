import {
  Bot,
  ShieldCheck,
  MessageSquare,
  BarChart3,
} from "lucide-react";
import React from "react";

const features = [
  {
    icon: Bot,
    title: "AI-powered valuation engine",
    description:
      "Advanced algorithms analyze 15+ financial metrics, industry benchmarks, and market trends to provide accurate business valuations in minutes.",
  },
  {
    icon: ShieldCheck,
    title: "Risk assessment for beginners",
    description:
      "Get a comprehensive risk score with detailed explanations of potential red flags and deal-breakers before you commit.",
  },
  {
    icon: MessageSquare,
    title: "Custom negotiation talking points",
    description:
      "Receive personalized negotiation strategies and key talking points to help you secure better deals with confidence.",
  },
  {
    icon: BarChart3,
    title: "Comparable sales analysis",
    description:
      "Access recent sales data of similar businesses in your area and industry to validate asking prices and market conditions.",
  },
];

const Features = () => {
  return (
    <div id="features" className="w-full py-12 xs:py-20 px-6 bg-white">
      <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center text-gray-900">
        Get professional analysis in minutes, not weeks
      </h2>
      <p className="text-center text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
        Everything you need to make confident buying decisions and avoid costly mistakes
      </p>
      <div className="w-full max-w-screen-lg mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col bg-white border border-gray-200 rounded-xl py-6 px-5"
          >
            <div className="mb-3 h-10 w-10 flex items-center justify-center bg-gray-100 rounded-full">
              <feature.icon className="h-6 w-6 text-gray-700" />
            </div>
            <span className="text-lg font-semibold text-gray-900">{feature.title}</span>
            <p className="mt-1 text-gray-600 text-[15px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
