import { useCharactersSelectedStore } from "../store/charactersSelectionStore";

const PersonListItem = ({ person }) => {
  const { removePersonById } = useCharactersSelectedStore();

  return (
    <li className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-md p-4 flex items-center space-x-4 mb-4">
      <img
        src={person?.image}
        alt="Avatar"
        className="h-10 w-10 rounded-full object-cover"
      />
      <span className="flex-1">
        {person?.name} ({person.species})
      </span>
      <button
        onClick={() => removePersonById(person.id)}
        className="text-red-500"
      >
        x
      </button>
    </li>
  );
};

export default PersonListItem;