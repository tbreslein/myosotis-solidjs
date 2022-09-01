import { createUniqueId } from "solid-js";

export class HouseHold {
  readonly id: string;
  constructor(id = createUniqueId()) {
    this.id = id;
  }
}
