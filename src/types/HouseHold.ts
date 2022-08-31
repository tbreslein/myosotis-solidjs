import { Member } from "./Member";
import { ToDo } from "./ToDo";

export interface HouseHold {
  members: Member[];
  todos: ToDo[];
}
