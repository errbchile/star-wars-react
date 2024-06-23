import { useCharactersSelectedStore } from "../store/charactersSelectionStore";
import { useThemeStore } from "../store/themeStore";

export default function CharacterCard({ character }) {
  const { isDarkMode } = useThemeStore();
  const { appPerson } = useCharactersSelectedStore();

  const themeClasses = isDarkMode
    ? "bg-gray-800 text-white"
    : "bg-white text-black";

  const paragraphThemeClasses = isDarkMode ? "text-gray-300" : "text-gray-600";

  const handleClick = () => {
    appPerson({ ...character });
  };

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer flex-shrink-0 w-60 shadow-md rounded-lg overflow-hidden ${themeClasses}`}
    >
      <img
        src={character?.image}
        alt={character?.name}
        className="w-full h-40 object-cover transform transition duration-300 hover:scale-110"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{character?.name}</h2>
        <p className={paragraphThemeClasses}>{character?.species}</p>
      </div>
    </div>
  );
}
