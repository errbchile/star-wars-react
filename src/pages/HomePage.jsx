import Header from "../components/Header";
import ImageCards from "../components/ImageCards";
import { useThemeStore } from "../store/store";
import darthVader from "../assets/darth-vader-bg.jpg";
import MasterYoda from "../assets/master-yoda-bg.jpg";

export default function HomePage() {
  const { isDarkMode } = useThemeStore();

  return (
    <div
      className={`min-h-screen flex flex-col ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Header />
      <ImageCards />
      <div className=" flex fllex-grow justify-center h-20">
        <img src={isDarkMode ? darthVader : MasterYoda} alt="bg" className="h-72" />
      </div>
    </div>
  );
}
