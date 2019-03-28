import { Guid } from "guid-typescript";

export class Flight {
  uID: string;
  origin: string;
  destination: string;
  departureDate: Date;
  price: number;
  constructor(
    origin: string,
    destination: string,
    departureDate: Date,
    price: number
  ) {
    this.origin = origin;
    this.destination = destination;
    this.departureDate = departureDate;
    this.price = price;

    this.uID = Guid.create().toString();
  }
}
