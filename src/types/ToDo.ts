import { createUniqueId } from "solid-js";

export class ToDo {
  readonly id: string;
  title: string;
  description: string;
  done = false;
  constructor(title: string, description: string) {
    this.id = createUniqueId();
    this.title = title;
    this.description = description;
  }
}
