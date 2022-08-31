import Stack from "@suid/material/Stack";
import { Component, For } from "solid-js";
import { ToDo } from "../../../types/ToDo";
import ToDoCard from "../ToDoCard";

interface ToDoListProps {
  todos: ToDo[];
}

const ToDoList: Component<ToDoListProps> = props => (
  <div>
    <Stack spacing={2} justifyContent="center" alignItems="center" sx={{ py: 2 }}>
      <For each={props.todos}>
        {todo => <ToDoCard title={todo.title} description={todo.description} done={todo.done} />}
      </For>
    </Stack>
  </div>
);

export default ToDoList;
