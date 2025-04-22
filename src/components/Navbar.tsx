
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, Book, Heart, Search, Filter } from "lucide-react";

const Navbar = () => {
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
          <Link to="#features" className="text-dex-darkGray hover:text-dex-red transition-colors">Features</Link>
          <Link to="#about" className="text-dex-darkGray hover:text-dex-red transition-colors">About</Link>
          <Link to="#faq" className="text-dex-darkGray hover:text-dex-red transition-colors">FAQ</Link>
        </div>
        
        <Button className="bg-dex-red hover:bg-dex-darkRed text-white">
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
