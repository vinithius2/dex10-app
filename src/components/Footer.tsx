
import { Button } from "@/components/ui/button";
import { Download, Instagram, Facebook, Reddit, Mail } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

const DOWNLOAD_LINK = "https://play.google.com/store/apps/details?id=com.vinithius.dex10";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLocale();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        {/* Download CTA */}
        <div className="bg-gradient-to-r from-dex-red to-dex-blue p-8 rounded-xl mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.ready_adventure}</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            {t.ready_adventure_desc}
          </p>
          <Button asChild size="lg" className="bg-white text-dex-blue hover:bg-gray-100">
            <a href={DOWNLOAD_LINK} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" />
              {t.download_now}
            </a>
          </Button>
        </div>
        
        {/* Footer content */}
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
                <a href="https://poke10.web.app/privacypolicy.html" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  {t.privacy_policy}
                </a>
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
              <a href="https://www.reddit.com/r/Poke10" target="_blank" rel="noopener noreferrer" className="text-white hover:text-dex-blue transition-colors">
                <span className="sr-only">Reddit</span>
                <Reddit className="h-6 w-6" />
              </a>
              <a href={`mailto:${t.feedback_mail}`} className="text-white hover:text-dex-blue transition-colors">
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Legal disclaimer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-sm text-gray-500 mb-4">
            <h4 className="font-bold mb-2">{t.legal_disclaimer_title}</h4>
            <p>
              {t.legal_disclaimer}
            </p>
          </div>
          <div className="text-sm text-gray-600">
            <p dangerouslySetInnerHTML={{ __html: t.copyright.replace("{year}", String(currentYear)) }} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
