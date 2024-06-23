import Header from "../components/Header";
import { useThemeStore } from "../store/themeStore";
import darthVader from "../assets/darth-vader-ungry.jpg";
import MasterYoda from "../assets/master-yoda-bg.png";

export default function AboutPage() {
  const { isDarkMode } = useThemeStore();

  const themeClasses = isDarkMode
    ? "bg-gray-900 text-white"
    : "bg-white text-black";

  const imageSrc = isDarkMode ? darthVader : MasterYoda;

  return (
    <div className={`min-h-screen ${themeClasses}`}>
      <Header />
      <div className="flex fllex-grow justify-center h-20">
        <img src={imageSrc} alt="bg" className="h-96" />
      </div>
    </div>
  );
}
