
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLocale } from "@/context/LocaleContext";
import { Award } from "lucide-react";

const CreatureOfTheDay = () => {
  const { t } = useLocale();

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <Badge className="mb-2 bg-dex-blue text-white border-none">{t.cotd_daily_feature}</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.cotd_title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.cotd_marketing ?? "Discover a new Creature of the Day every day in Dex10! Click below to reveal today's featured monster. Come back tomorrow for another exciting surprise and expand your collection!"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="bg-gradient-to-br from-dex-blue/10 to-dex-red/10 p-6 rounded-xl flex justify-center">
            <div className="relative w-64 h-64 animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-dex-blue/20 to-dex-red/20 rounded-full blur-xl animate-pulse-light"></div>
              <div className="relative w-full h-full flex flex-col items-center justify-center text-7xl font-bold text-dex-blue">
                <Award className="h-16 w-16 mb-4 text-dex-blue" />
                ?
              </div>
            </div>
          </div>

          <Card className="border-none shadow-lg bg-white flex flex-col justify-center">
            <CardContent className="p-8 text-center flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">{t.cotd_marketing_title ?? "Creature of the Day Awaits!"}</h3>
              <p className="text-gray-700">
                {t.cotd_marketing_desc ?? "Get a mysterious new creature every day. Remember to check back daily to keep your collection growing. Ready to meet today's star?"}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CreatureOfTheDay;
