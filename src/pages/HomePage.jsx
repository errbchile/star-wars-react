import Header from "../components/Header";
import { useThemeStore } from "../store/store";

export default function HomePage() {
  const { isDarkMode, toggleIsDarkMode } = useThemeStore();

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Header darkMode={isDarkMode} setDarkMode={toggleIsDarkMode} />
    </div>
  );
}
