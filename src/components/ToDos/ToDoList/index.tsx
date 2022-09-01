import Stack from "@suid/material/Stack";
import { Component, For } from "solid-js";
import ToDoCard from "../ToDoCard";
import houseHoldsStore from "../../../state/stores/households";

const ToDoList: Component = () => {
  const { houseHolds } = houseHoldsStore;
  // TEMP: just for testing purposes, I just take the first household in the array
  const todos = houseHolds[0]?.todos;

  return (
    <Stack spacing={2} justifyContent="center" alignItems="center" sx={{ py: 2 }}>
      <For each={todos}>
        {todo => (
          <ToDoCard
            id={todo.id}
            title={todo.title}
            description={todo.description}
            done={todo.done}
          />
        )}
      </For>
    </Stack>
  );
};

export default ToDoList;
