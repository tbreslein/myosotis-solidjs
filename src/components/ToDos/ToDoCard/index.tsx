import Box from "@suid/material/Box";
import Card from "@suid/material/Card";
import CardContent from "@suid/material/CardContent";
import Checkbox from "@suid/material/Checkbox";
import Typography from "@suid/material/Typography";
import { Component } from "solid-js";
import { ToDo } from "../../../types/ToDo";

const ToDoCard: Component<ToDo> = props => (
  <Card sx={{ maxWidth: 345, display: "flex" }}>
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <Checkbox checked={props.done} inputProps={{ "aria-label": "todo is done" }} />
    </Box>
  </Card>
);

export default ToDoCard;
