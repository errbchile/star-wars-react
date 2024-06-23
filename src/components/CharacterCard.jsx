import { useThemeStore } from "../store/store";

export default function CharacterCard({ character }) {
  const { isDarkMode } = useThemeStore();

  return (
    <div
      className={`flex-shrink-0 w-60 shadow-md rounded-lg overflow-hidden ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <img
        src={character?.image}
        alt={character?.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{character?.name}</h2>
        <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
          {character?.species}
        </p>
      </div>
    </div>
  );
}
