import Header from "../components/Header";
import { useThemeStore } from "../store/store";
import darthVader from "../assets/darth-vader-bg.jpg";
import MasterYoda from "../assets/master-yoda-bg.jpg";

export default function AboutPage() {
  const { isDarkMode } = useThemeStore();

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Header />
      <div className=" flex fllex-grow justify-center h-20">
        <img
          src={isDarkMode ? darthVader : MasterYoda}
          alt="bg"
          className="h-72"
        />
      </div>
    </div>
  );
}
