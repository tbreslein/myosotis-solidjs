import Card from "@suid/material/Card";
import CardContent from "@suid/material/CardContent";
import Typography from "@suid/material/Typography";
import { Component } from "solid-js";
import { ToDo } from "../../../types/ToDo";

const ToDoCard: Component<ToDo> = props => (
  <Card sx={{ maxWidth: 345 }}>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {props.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {props.description}
      </Typography>
    </CardContent>
  </Card>
);

export default ToDoCard;
