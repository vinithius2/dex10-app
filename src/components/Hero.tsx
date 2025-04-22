
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container flex flex-col items-center text-center">
        <div className="w-64 h-64 mb-8 animate-fade-in">
          <img 
            src="/dex10-logo.png" 
            alt="Dex10 Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-dex-red to-dex-blue bg-clip-text text-transparent animate-fade-in">
          The Ultimate Creature Guide
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-gray-700 mb-8 animate-fade-in">
          Embark on an epic journey with Dex 10 – your comprehensive guide for fans of the pocket monster franchise! 
          Explore detailed information on over 1,000 creatures from timeless classics to the latest discoveries.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
          <Button size="lg" className="bg-dex-red hover:bg-dex-darkRed text-white">
            <Download className="mr-2 h-5 w-5" />
            Download Now
          </Button>
          <Button variant="outline" size="lg" className="border-dex-blue text-dex-blue hover:bg-dex-blue hover:text-white">
            Learn More
          </Button>
        </div>

        <div className="mt-16 relative w-full">
          <div className="absolute -left-48 -top-48 w-96 h-96 bg-dex-red/10 rounded-full blur-3xl"></div>
          <div className="absolute -right-48 -bottom-48 w-96 h-96 bg-dex-blue/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
