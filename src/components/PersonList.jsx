import { useCharactersSelectedStore } from "../store/charactersSelectionStore";
import PersonListItem from "./PersonListItem";

export default function PersonList({ person }) {
  const { personList } = useCharactersSelectedStore();

  return (
    <>
      <h2 className={`text-center mb-2`}>Characters selected:</h2>
      <ul className={`divide-y`}>
        {personList.map((person) => (
          <PersonListItem key={person.id} person={person} />
        ))}
      </ul>
    </>
  );
}
