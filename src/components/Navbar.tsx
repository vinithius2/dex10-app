import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLocale } from "@/context/LocaleContext";

const DOWNLOAD_LINK = "https://play.google.com/store/apps/details?id=com.vinithius.dex10";

const Navbar = () => {
  const { t } = useLocale();

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-2xl">
            <span className="text-dex-red">DEX</span>
            <span className="text-dex-blue">10</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="#features" className="text-dex-darkGray hover:text-dex-red transition-colors">
            {t.features}
          </Link>
          <Link to="#about" className="text-dex-darkGray hover:text-dex-red transition-colors">
            {t.about}
          </Link>
          <Link to="#faq" className="text-dex-darkGray hover:text-dex-red transition-colors">
            {t.faq}
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Button asChild className="bg-dex-red hover:bg-dex-darkRed text-white">
            <a href={DOWNLOAD_LINK} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              {t.download}
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
