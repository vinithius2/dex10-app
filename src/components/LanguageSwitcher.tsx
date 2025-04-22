
import { useLocale } from "@/context/LocaleContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage, languageDisplay } = useLocale();

  return (
    <div className="flex items-center">
      <Globe className="w-5 h-5 mr-1 text-dex-blue" aria-hidden="true" />
      <select
        className="bg-transparent outline-none text-sm font-medium text-dex-darkGray focus:text-dex-blue cursor-pointer"
        value={language}
        onChange={(e) => setLanguage(e.target.value as any)}
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
