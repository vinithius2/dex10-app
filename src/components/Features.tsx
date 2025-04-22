
import { Book, Search, Heart, Star, Wifi, Filter, Calendar, Smartphone, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLocale } from "@/context/LocaleContext";

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
  const { t } = useLocale();
  const features = [
    {
      icon: <Book className="h-6 w-6" />,
      title: t.feat_creatures,
      description: t.feat_creatures_desc,
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: t.feat_offline,
      description: t.feat_offline_desc,
    },
    {
      icon: <Filter className="h-6 w-6" />,
      title: t.feat_filters,
      description: t.feat_filters_desc,
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: t.feat_daily,
      description: t.feat_daily_desc,
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: t.feat_favorites,
      description: t.feat_favorites_desc,
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: t.feat_updates,
      description: t.feat_updates_desc,
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: t.feat_nologin,
      description: t.feat_nologin_desc,
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: t.feat_feedback,
      description: t.feat_feedback_desc,
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="features">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.key_features}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.key_features_desc}
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
