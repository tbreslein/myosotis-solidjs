import { createRoot } from "solid-js";
import { createStore, produce } from "solid-js/store";
import { HouseHold } from "../../types/HouseHold";
import { Member } from "../../types/Member";
import { ToDo } from "../../types/ToDo";

const DUMMY_HOUSEHOLDS: HouseHold[] = [
  new HouseHold(
    [],
    [new ToDo("Do the dishes", "DO THE DISHES"), new ToDo("Feed the cats", "they are hungry")]
  ),
];

const createHouseHolds = () => {
  const [houseHolds, setHouseHolds] = createStore<HouseHold[]>(DUMMY_HOUSEHOLDS);
  const addHouseHold = (members = [], todos = []) => {
    setHouseHolds(
      produce(households => {
        households.push(new HouseHold(members, todos));
      })
    );
  };

  const addMember = (houseHoldId: string, name: string, isThatMe: boolean) => {
    setHouseHolds(
      household => household.id === houseHoldId,
      "members",
      produce(members => {
        members.push(new Member(name, isThatMe));
      })
    );
  };

  const addTodo = (houseHoldId: string, title: string, description: string) => {
    setHouseHolds(
      household => household.id === houseHoldId,
      "todos",
      produce(todos => {
        todos.push(new ToDo(title, description));
      })
    );
  };

  const toggleTodo = (houseHoldId: string, todoId: string) => {
    setHouseHolds(
      household => household.id === houseHoldId,
      "todos",
      todo => todo.id === todoId,
      "done",
      done => !done
    );
  };

  return { houseHolds, addHouseHold, addMember, addTodo, toggleTodo };
};

export default createRoot(createHouseHolds);
