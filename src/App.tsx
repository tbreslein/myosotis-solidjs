import type { Component } from "solid-js";
import Menubar from "./components/Menubar";
import ToDoList from "./components/ToDos/ToDoList";
import { ToDo } from "./types/ToDo";

const DUMMY_TODOS: ToDo[] = [
  {
    title: "Do the dishes",
    description: "DO THE DISHES",
  },
  {
    title: "Feed the cats",
    description: "they're hungry",
  },
];

const App: Component = () => {
  return (
    <>
      <Menubar />
      <ToDoList todos={DUMMY_TODOS} />
    </>
  );
};

export default App;
