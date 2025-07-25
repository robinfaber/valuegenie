import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-20 px-6 bg-gradient-to-br from-brand-primary via-brand-primary to-brand-secondary text-white -mt-16 pt-32">
      <div className="text-center max-w-6xl">
        <h1 className="text-headline-sm md:text-headline font-extrabold !leading-[1.1] tracking-tight">
          Is Your Home Safe for
          <br />
          <span className="block text-blue-100">Aging in Place?</span>
        </h1>
        <p className="mt-6 text-body font-normal text-blue-100 max-w-4xl mx-auto">
          Upload photos and get an AI-powered safety assessment in minutes.
          <br />
          Spot hidden fall risks and get an actionable safety plan — all from the privacy of your home.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
          <button className="h-12 px-8 text-button bg-brand-secondary hover:bg-brand-primary text-white font-medium rounded-lg transition-colors">
            Start Free Assessment
          </button>
          <button className="h-12 px-8 text-button bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg border border-white/20 transition-colors">
            See Sample Report
          </button>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-blue-100 text-body-sm font-normal">
            Trusted by <span className="font-semibold text-yellow-400">1,200+</span> families planning to age safely at home
          </p>
          <p className="mt-2 text-blue-100/80 text-sm font-normal">
            Developed with occupational therapy experts
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
