
import { useLocale } from "@/context/LocaleContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { locale, setLocale, languageDisplay } = useLocale();

  return (
    <div className="flex items-center">
      <Globe className="w-5 h-5 mr-1 text-dex-blue" aria-hidden="true" />
      <select
        className="bg-transparent outline-none text-sm font-medium text-dex-darkGray focus:text-dex-blue cursor-pointer"
        value={locale}
        onChange={(e) => setLocale(e.target.value)}
        aria-label="Select language"
      >
        {Object.entries(languageDisplay).map(([key, label]) => (
          <option key={key} value={key} className="text-black">
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
