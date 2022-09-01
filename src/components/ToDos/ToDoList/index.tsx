import CardContent from "@suid/material/CardContent";
import Paper from "@suid/material/Paper";
import Stack from "@suid/material/Stack";
import Typography from "@suid/material/Typography";
import { Component, For } from "solid-js";
// import ToDoCard from "../ToDoCard";
import todoListStore from "../../../state/stores/todoListStore";

const ToDoList: Component = () => {
  const { todoList, toggleTodo } = todoListStore;
  return (
    <Stack spacing={2} justifyContent="center" alignItems="center" sx={{ py: 2 }}>
      <For each={todoList}>
        {todo => (
          <Paper
            variant="outlined"
            elevation={2}
            sx={{ display: "flex", flexDirection: "row", width: "90%" }}
          >
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography gutterBottom variant="h5" component="div">
                {todo.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {todo.description}; {todo.id}
              </Typography>
            </CardContent>
            <input type="checkbox" checked={todo.done} onChange={[toggleTodo, todo.id]} />
          </Paper>
        )}
      </For>
    </Stack>
  );
};

export default ToDoList;
