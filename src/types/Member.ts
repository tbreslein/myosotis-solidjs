import { createUniqueId } from "solid-js";

export class Member {
  readonly id: string;
  name: string;
  constructor(name: string, id = createUniqueId()) {
    this.id = id;
    this.name = name;
  }
}
