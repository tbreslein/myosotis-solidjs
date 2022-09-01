import { createUniqueId } from "solid-js";

export class Member {
  readonly id: string;
  name: string;
  isThatMe: boolean;
  constructor(name: string, isThatMe: boolean) {
    this.id = createUniqueId();
    this.name = name;
    this.isThatMe = isThatMe;
  }
}
