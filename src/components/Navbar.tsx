
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocale } from "@/context/LocaleContext";
import { Download } from "lucide-react";

const DOWNLOAD_LINK = "https://play.google.com/store/apps/details?id=com.vinithius.dex10";
const AMAZON_DOWNLOAD_LINK = "https://www.amazon.com/dp/B0F69LKYGL";

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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-dex-red hover:bg-dex-darkRed text-white">
                <Download className="mr-2 h-4 w-4" />
                {t.download_now}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <a href={DOWNLOAD_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  Google Play
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href={AMAZON_DOWNLOAD_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  Amazon Store
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
