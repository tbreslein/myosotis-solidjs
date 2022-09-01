import { createUniqueId } from "solid-js";

export class ToDo {
  readonly id: string;
  title: string;
  description: string;
  done = false;
  // TEMP: the default value for id can be removed eventually, since addTodo uses the same default
  constructor(title: string, description: string, id = createUniqueId()) {
    this.id = id;
    this.title = title;
    this.description = description;
  }
}
