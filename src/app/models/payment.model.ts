import { Guid } from "guid-typescript";

export class Payment {
  uID: string;
  number: string;
  month: string;
  year: string;
  cvc: string;
  name: string;
  constructor(
    number: string,
    month: string,
    year: string,
    cvc: string,
    name: string
  ) {
    this.number = number;
    this.month = month;
    this.year = year;
    this.cvc = cvc;
    this.name = name;
    this.uID = Guid.create().toString();
  }
}
