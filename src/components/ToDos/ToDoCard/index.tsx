import CardContent from "@suid/material/CardContent";
import Checkbox from "@suid/material/Checkbox";
import Paper from "@suid/material/Paper";
import Typography from "@suid/material/Typography";
import { Component } from "solid-js";
import { ToDo } from "../../../types/ToDo";

const ToDoCard: Component<ToDo> = props => (
  <Paper
    variant="outlined"
    elevation={2}
    sx={{ display: "flex", flexDirection: "row", width: "90%" }}
  >
    <CardContent sx={{ flex: "1 0 auto" }}>
      <Typography gutterBottom variant="h5" component="div">
        {props.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {props.description}
      </Typography>
    </CardContent>
    <Checkbox checked={props.done} inputProps={{ "aria-label": "todo is done" }} />
  </Paper>
);

export default ToDoCard;
