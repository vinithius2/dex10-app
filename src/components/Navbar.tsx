
import { Button } from "@/components/ui/button";

const DOWNLOAD_LINK = "https://play.google.com/store/apps/details?id=com.vinithius.dex10";

const Navbar = () => {
  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container flex items-center justify-center">
        {/* Centered Logo */}
        <div className="flex-1 flex justify-center">
          <img
            src="/lovable-uploads/60ae252c-f50d-402f-b51c-a91fb18ad0cb.png"
            alt="Dex10 Logo"
            className="w-14 h-14 object-contain"
          />
        </div>
        {/* Download Button stays to the right on large screens, hidden on mobile for focus */}
        <div className="hidden md:flex items-center gap-4 ml-auto">
          <Button asChild className="bg-dex-red hover:bg-dex-darkRed text-white">
            <a href={DOWNLOAD_LINK} target="_blank" rel="noopener noreferrer">
              Download
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
