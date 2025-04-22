
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CreatureOfTheDay from "@/components/CreatureOfTheDay";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Filter, Book, Heart, Search } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <Hero />
      
      <Features />
      
      {/* App Screenshots/Preview Section */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Your Complete Creature Encyclopedia</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Perfect for planning strategies, building your dream team, and diving deeper into this captivating universe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-dex-blue/10 rounded-full w-14 h-14 flex items-center justify-center mb-4 text-dex-blue">
                <Book className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Comprehensive Database</h3>
              <p className="text-gray-600">
                Access detailed information on over 1,000 creatures including their types, abilities, moves, and evolutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-dex-red/10 rounded-full w-14 h-14 flex items-center justify-center mb-4 text-dex-red">
                <Filter className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Advanced Search & Filter</h3>
              <p className="text-gray-600">
                Find exactly what you're looking for with powerful search capabilities and multiple filter options.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-dex-blue/10 rounded-full w-14 h-14 flex items-center justify-center mb-4 text-dex-blue">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Personalized Experience</h3>
              <p className="text-gray-600">
                Create favorite lists, track your collection, and get daily recommendations tailored to your preferences.
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Got questions? We've got answers.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Is this an official Pokémon app?</h3>
              <p className="text-gray-700">
                No, Dex 10 is a fan-made, unofficial app. It is not affiliated with, endorsed, or supported by Nintendo, GAME FREAK, or The Pokémon Company.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Do I need to create an account to use Dex 10?</h3>
              <p className="text-gray-700">
                No! Dex 10 is designed to be used without requiring any account creation or login, respecting your privacy while providing full functionality.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">How often is the app updated with new creatures?</h3>
              <p className="text-gray-700">
                We aim to update the app as quickly as possible whenever new creatures are officially released, typically within days of official announcements.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Can I use Dex 10 without an internet connection?</h3>
              <p className="text-gray-700">
                Yes, basic creature data is available offline. However, detailed information, images, and some features require an internet connection.
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
