import { Button } from "@/components/ui/button";
import { Download, Instagram, Facebook, Mail } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { Link } from "react-router-dom";

const DOWNLOAD_LINK = "https://play.google.com/store/apps/details?id=com.vinithius.dex10";
const AMAZON_DOWNLOAD_LINK = "https://www.amazon.com/dp/B0F69LKYGL";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLocale();
  
  const replaceCopyrightYear = () => {
    if (typeof t.copyright === 'string') {
      return t.copyright.replace("{year}", String(currentYear));
    }
    return `© ${currentYear} Dex10 App. All rights reserved.`;
  };
  
  const handleEmailClick = () => {
    window.location.href = `mailto:${t.feedback_mail}?subject=Contact Dex10&body=Hello, I would like to contact about Dex10...`;
  };
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="bg-gradient-to-r from-dex-red to-dex-blue p-8 rounded-xl mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.ready_adventure}</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            {t.ready_adventure_desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-dex-blue hover:bg-gray-100">
              <a href={DOWNLOAD_LINK} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Google Play
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href={AMAZON_DOWNLOAD_LINK} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Amazon Store
              </a>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Dex 10</h3>
            <p className="text-gray-400">
              {t.hero_description}
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t.links}</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/vinithius2/Poke10-Compose/releases" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  {t.features}
                </a>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  {t.privacy_policy}
                </Link>
              </li>
              <li>
                <a href={`mailto:${t.feedback_mail}`} className="text-gray-400 hover:text-white transition-colors">
                  {t.contact}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t.connect}</h3>
            <p className="text-gray-400 mb-4">
              {t.faq_desc}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/app_dex10/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-dex-blue transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61571764894604" target="_blank" rel="noopener noreferrer" className="text-white hover:text-dex-blue transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.reddit.com/r/Dex10/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-dex-blue transition-colors">
                <span className="sr-only">Reddit</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9 12h.01"></path>
                  <path d="M15 12h.01"></path>
                  <path d="M16 10v.01"></path>
                  <path d="M8 10v.01"></path>
                  <path d="M9 16c0 1 1.5 2 3 2s3-1 3-2"></path>
                </svg>
              </a>
              <button onClick={handleEmailClick} className="text-white hover:text-dex-blue transition-colors">
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="text-sm text-gray-500 mb-4">
            <h4 className="font-bold mb-2">{t.legal_disclaimer_title}</h4>
            <p>
              {t.legal_disclaimer}
            </p>
          </div>
          <div className="text-sm text-gray-600">
            <p dangerouslySetInnerHTML={{ __html: replaceCopyrightYear() }} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
