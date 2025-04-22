
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLocale } from "@/context/LocaleContext";

const CreatureOfTheDay = () => {
  const { t } = useLocale();

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <Badge className="mb-2 bg-dex-blue text-white border-none">{t.cotd_daily_feature}</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.cotd_title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.cotd_description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="bg-gradient-to-br from-dex-blue/10 to-dex-red/10 p-6 rounded-xl flex justify-center">
            {/* Placeholder for creature image - in a real app, this would be dynamic */}
            <div className="relative w-64 h-64 animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-dex-blue/20 to-dex-red/20 rounded-full blur-xl animate-pulse-light"></div>
              <div className="relative w-full h-full flex items-center justify-center text-7xl font-bold text-dex-blue">
                ?
              </div>
            </div>
          </div>

          <Card className="border-none shadow-lg bg-white">
            <CardContent className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">{t.cotd_mystery}</h3>
                <div className="flex space-x-2">
                  <Badge className="bg-blue-500 hover:bg-blue-600">{t.cotd_type1}</Badge>
                  <Badge className="bg-red-500 hover:bg-red-600">{t.cotd_type2}</Badge>
                </div>
              </div>
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-medium text-gray-500">{t.cotd_desc_label}</h4>
                  <p className="text-gray-800">
                    {t.cotd_desc}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-500">{t.cotd_abilities}</h4>
                  <p className="text-gray-800">
                    {t.cotd_abilities_val}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-500">{t.cotd_evo}</h4>
                  <p className="text-gray-800">
                    {t.cotd_evo_val}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="block text-sm font-medium text-gray-500">{t.cotd_appears_in}</span>
                  <span className="font-semibold">{t.cotd_latest_gen}</span>
                </div>
                <button className="text-dex-blue hover:text-dex-red transition-colors flex items-center">
                  <span className="mr-1">{t.cotd_view_details}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CreatureOfTheDay;
