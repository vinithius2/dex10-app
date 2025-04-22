
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CreatureOfTheDay from "@/components/CreatureOfTheDay";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Filter, Book, Heart, Search } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

const DOWNLOAD_LINK = "https://play.google.com/store/apps/details?id=com.vinithius.dex10";

const Index = () => {
  const { t } = useLocale();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <Hero />
      
      <Features />
      
      {/* App Screenshots/Preview Section */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.encyclopedia_title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.encyclopedia_desc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-dex-blue/10 rounded-full w-14 h-14 flex items-center justify-center mb-4 text-dex-blue">
                <Book className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t.comprehensive_db}</h3>
              <p className="text-gray-600">
                {t.comprehensive_db_desc}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-dex-red/10 rounded-full w-14 h-14 flex items-center justify-center mb-4 text-dex-red">
                <Filter className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t.advanced_search}</h3>
              <p className="text-gray-600">
                {t.advanced_search_desc}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-dex-blue/10 rounded-full w-14 h-14 flex items-center justify-center mb-4 text-dex-blue">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t.personalized_experience}</h3>
              <p className="text-gray-600">
                {t.personalized_experience_desc}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <CreatureOfTheDay />
      
      {/* FAQ Section */}
      <section className="py-16 bg-white" id="faq">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.faq_title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.faq_desc}
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">{t.faq_q1}</h3>
              <p className="text-gray-700">
                {t.faq_a1}
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">{t.faq_q2}</h3>
              <p className="text-gray-700">
                {t.faq_a2}
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">{t.faq_q3}</h3>
              <p className="text-gray-700">
                {t.faq_a3}
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">{t.faq_q4}</h3>
              <p className="text-gray-700">
                {t.faq_a4}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
