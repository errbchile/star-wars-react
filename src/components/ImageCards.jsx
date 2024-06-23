import { useCharactersList } from "../fetch/characters";
import CharacterCard from "./CharacterCard";

const ImageCards = () => {
  const { data, isPending, isError, error } = useCharactersList();

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="flex overflow-x-auto space-x-4 p-4 px-8">
      {data.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default ImageCards;
