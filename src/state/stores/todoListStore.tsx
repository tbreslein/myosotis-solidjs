import { createRoot, createUniqueId } from "solid-js";
import { createStore } from "solid-js/store";
import { ToDo } from "../../types/ToDo";

const DUMMY_TODOS = [
  new ToDo("do the dishes", "DO THE DISHES", "td1"),
  new ToDo("feed the cats", "they're hungry", "td2"),
];

const createTodoList = () => {
  const [todoList, setTodoList] = createStore<ToDo[]>(DUMMY_TODOS);
  const addTodo = (title: string, description: string, id: string = createUniqueId()) => {
    setTodoList([...todoList, new ToDo(title, description, id)]);
  };
  const toggleTodo = (id: string) => {
    setTodoList(
      todo => todo.id === id,
      "done",
      done => !done
    );
  };
  return { todoList, addTodo, toggleTodo };
};

export default createRoot(createTodoList);
