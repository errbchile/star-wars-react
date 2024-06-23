import { useCharactersSelectedStore } from "../store/charactersSelectionStore";
import PersonList from "./PersonList";

const CharactersSelection = () => {
  const { personList } = useCharactersSelectedStore();

  const isListEmpty = !personList?.length;

  return (
    <>
      {isListEmpty && (
        <h2 className="text-center dark:text-gray-300">
          Select a Character 👆
        </h2>
      )}

      {!isListEmpty && (
        <div className="dark:text-gray-300">
          <PersonList />
        </div>
      )}
    </>
  );
};

export default CharactersSelection;
