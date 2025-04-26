import { useLocale } from "@/context/LocaleContext";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";

const DOWNLOAD_LINK = "https://play.google.com/store/apps/details?id=com.vinithius.dex10";
const AMAZON_DOWNLOAD_LINK = "https://www.amazon.com/dp/B0F69LKYGL";

const PrivacyPolicy = () => {
  const { t } = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-12 px-4">
        <Button asChild variant="outline" className="mb-6">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.back_to_home}
          </Link>
        </Button>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
          
          <p className="text-gray-600 mb-6">
            This Privacy Policy applies to the <strong>Dex10</strong> application, developed by <strong>Marcos Vinithius</strong>. We value user privacy and are committed to safeguarding personal information. Below is an outline of how data is handled.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Data Collection</h2>
          <p className="text-gray-600 mb-4">
            The app collects minimal data necessary to ensure its functionality. This includes:
          </p>
          <ul className="list-disc list-inside mb-6 text-gray-600">
            <li className="mb-2"><strong>Firebase Analytics</strong>: Used for tracking app usage and improving performance.</li>
            <li className="mb-2"><strong>AdMob</strong>: Used for serving ads and enhancing the user experience.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Data Sharing</h2>
          <p className="text-gray-600 mb-6">
            Dex10 does not share sensitive user data with external servers, emails, or unauthorized third parties. However, Firebase and AdMob may collect and process certain data under their respective privacy policies.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Third-Party Services</h2>
          <p className="text-gray-600 mb-4">
            The app uses the following third-party services:
          </p>
          <ul className="list-disc list-inside mb-6 text-gray-600">
            <li className="mb-2">
              <strong>Firebase</strong>: Firebase Analytics collects information such as device type, operating system version, and user interactions to enhance app performance. More details can be found in the{" "}
              <a href="https://firebase.google.com/policies/analytics" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Firebase Privacy Policy
              </a>.
            </li>
            <li className="mb-2">
              <strong>AdMob</strong>: AdMob serves ads and may use collected data for ad personalization. Details can be found in the{" "}
              <a href="https://www.google.com/intl/en/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                AdMob Privacy Policy
              </a>.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Data Security</h2>
          <p className="text-gray-600 mb-6">
            All data is transmitted securely using encryption protocols to protect user information.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Data Retention and Deletion</h2>
          <p className="text-gray-600 mb-6">
            Data collected by the app is retained only as long as necessary to provide its core functionalities. Users who wish to delete their data should follow the respective procedures provided by Firebase and AdMob.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Changes to this Policy</h2>
          <p className="text-gray-600 mb-6">
            Any updates to this Privacy Policy will be reflected on this page. By continuing to use the app, users agree to any modifications made.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center border-t pt-8">
            <Button asChild>
              <a href={DOWNLOAD_LINK} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Google Play
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href={AMAZON_DOWNLOAD_LINK} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Amazon Store
              </a>
            </Button>
          </div>

          <footer className="mt-12 text-center text-gray-500 text-sm">
            © {currentYear} Dex10 by Marcos Vinithius. All rights reserved.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
