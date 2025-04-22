
import { Book, Search, Heart, Star, Wifi, Filter, Calendar, Smartphone, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <Card className="border border-gray-200 hover:border-dex-blue transition-colors hover:shadow-md bg-white">
    <CardContent className="p-6">
      <div className="mb-4 w-12 h-12 rounded-full bg-dex-blue/10 flex items-center justify-center text-dex-blue">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

const Features = () => {
  const features = [
    {
      icon: <Book className="h-6 w-6" />,
      title: "1,000+ Creatures",
      description: "Full data on types, abilities, moves, evolutions, and descriptions for all creatures."
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "Offline List Available",
      description: "Access basic information offline, with detailed data when connected."
    },
    {
      icon: <Filter className="h-6 w-6" />,
      title: "Advanced Filters",
      description: "Search by type, generation, region, and many more categories."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Creature of the Day",
      description: "Discover a new fascinating creature with each day that passes."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Favorites System",
      description: "Save and organize your favorite creatures for quick access."
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Frequent Updates",
      description: "Stay current with the latest creature data and app features."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "No Login Required",
      description: "Jump straight into the experience without creating an account."
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Developer Feedback",
      description: "Send suggestions directly through the app to shape future updates."
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="features">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Key Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to enhance your pocket monster experience in one powerful app
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="opacity-0 animate-fade-in" 
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
