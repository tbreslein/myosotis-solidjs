import Menubar from "../../components/Menubar";
import ToDoList from "../../components/ToDos/ToDoList";
import { ToDo } from "../../types/ToDo";

const DUMMY_TODOS: ToDo[] = [
  {
    title: "Do the dishes",
    description: "DO THE DISHES",
    done: false,
  },
  {
    title: "Feed the cats",
    description: "they're hungry",
    done: false,
  },
];

const HomePage = () => (
  <>
    <Menubar />
    <ToDoList todos={DUMMY_TODOS} />
  </>
);

export default HomePage;
