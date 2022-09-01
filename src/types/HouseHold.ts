import { createUniqueId } from "solid-js";
import { Member } from "./Member";
import { ToDo } from "./ToDo";

export class HouseHold {
  readonly id: string;
  members: Member[];
  todos: ToDo[];
  constructor(members: Member[] = [], todos: ToDo[] = []) {
    this.id = createUniqueId();
    this.members = members;
    this.todos = todos;
  }
}
