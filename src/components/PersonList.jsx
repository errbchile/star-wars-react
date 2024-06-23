import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useCharactersSelectedStore } from "../store/charactersSelectionStore";
import PersonListItem from "./PersonListItem";

export default function PersonList({ person }) {
  const { personList } = useCharactersSelectedStore();
  const [animationParent] = useAutoAnimate();

  return (
    <>
      <h2 className={`text-center mb-2`}>Characters selected:</h2>
      <ul className={`divide-y`} ref={animationParent}>
        {personList.map((person) => (
          <PersonListItem key={person.id} person={person} />
        ))}
      </ul>
    </>
  );
}
