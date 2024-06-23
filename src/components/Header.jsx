import { useThemeStore } from "../store/store";

function Header() {
  const { isDarkMode, toggleIsDarkMode } = useThemeStore();

  return (
    <header className="bg-gray-100 dark:bg-gray-800 p-4">
      <nav className="container mx-auto flex justify-between items-center px-8">
        <div className="text-lg font-bold">
          <a href="/">LOGO</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="/" className="text-gray-900 dark:text-white">
            Home
          </a>
          <a href="/about" className="text-gray-900 dark:text-white">
            About
          </a>
          <label
            htmlFor="theme-toggle"
            className="flex items-center cursor-pointer"
          >
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
        </div>
      </nav>
    </header>
  );
}

export default Header;
