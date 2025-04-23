
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocale } from "@/context/LocaleContext";

const DOWNLOAD_LINK = "https://play.google.com/store/apps/details?id=com.vinithius.dex10";

const Navbar = () => {
  const { t } = useLocale();
  
  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container flex items-center">
        {/* Left aligned Logo */}
        <div className="flex-shrink-0">
          <img
            src="/lovable-uploads/60ae252c-f50d-402f-b51c-a91fb18ad0cb.png"
            alt="Dex10 Logo"
            className="w-14 h-14 object-contain"
          />
        </div>
        {/* Language switcher and Download Button on the right */}
        <div className="hidden md:flex items-center gap-4 ml-auto">
          <LanguageSwitcher />
          <Button asChild className="bg-dex-red hover:bg-dex-darkRed text-white">
            <a href={DOWNLOAD_LINK} target="_blank" rel="noopener noreferrer">
              {t.download_now}
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
