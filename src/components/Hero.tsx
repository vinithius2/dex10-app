import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

const DOWNLOAD_LINK = "https://play.google.com/store/apps/details?id=com.vinithius.dex10";
const AMAZON_DOWNLOAD_LINK = "https://www.amazon.com/dp/B0F69LKYGL";

const Hero = () => {
  const { t } = useLocale();
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container flex flex-col items-center text-center">
        <div className="w-[60%] max-w-4xl mb-12 relative">
          <img
            src="/lovable-uploads/0386d383-8d66-4d2f-a1ac-84062562753e.png"
            alt="Dex10 App Screenshots"
            className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-dex-red to-dex-blue bg-clip-text text-transparent animate-fade-in">
          {t.hero_title}
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-gray-700 mb-8 animate-fade-in">
          {t.hero_description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
          <Button
            asChild
            size="lg"
            className="bg-dex-red hover:bg-dex-darkRed text-white"
          >
            <a href={DOWNLOAD_LINK} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" />
              Google Play
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
          >
            <a href={AMAZON_DOWNLOAD_LINK} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" />
              Amazon Store
            </a>
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
