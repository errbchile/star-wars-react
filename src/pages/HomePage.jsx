import Header from "../components/Header";
import ImageCards from "../components/ImageCards";
import { useThemeStore } from "../store/themeStore";
import darthVader from "../assets/darth-vader-ungry.jpg";
import masterYoda from "../assets/master-yoda-bg.png";
import CharactersSelection from "../components/CharactersSelection";

export default function HomePage() {
  const { isDarkMode } = useThemeStore();

  const themeClasses = isDarkMode
    ? "bg-gray-900 text-white"
    : "bg-white text-black";

  const imageSrc = isDarkMode ? darthVader : masterYoda;

  return (
    <div className={`min-h-screen flex flex-col ${themeClasses}`}>
      <Header />
      <ImageCards />
      <div className="flex fllex-grow justify-center h-20">
        <div className="w-1/2 p-4">
          <CharactersSelection />
        </div>
        <div className="w-1/2">
          <img src={imageSrc} alt="bg" className="h-72" />
        </div>
      </div>
    </div>
  );
}
