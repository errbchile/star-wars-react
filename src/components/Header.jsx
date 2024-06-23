import ThemeSwitch from "./ThemeSwitch";

function Header() {
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
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  );
}

export default Header;
