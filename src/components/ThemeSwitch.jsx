import { useThemeStore } from "../store/themeStore";

export default function ThemeSwitch() {
  const { isDarkMode, toggleIsDarkMode } = useThemeStore();

  return (
    <label htmlFor="theme-toggle" className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          id="theme-toggle"
          type="checkbox"
          className="sr-only"
          checked={isDarkMode}
          onChange={toggleIsDarkMode}
        />
        <div className="w-10 h-4 bg-gray-300 rounded-full shadow-inner dark:bg-gray-600"></div>
        <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition transform dark:translate-x-full"></div>
      </div>
    </label>
  );
}
