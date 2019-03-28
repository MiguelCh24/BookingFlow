import { Guid } from "guid-typescript";

export class Passenger {
  uID: string;
  firstName: string;
  lastName: string;
  dateBirth: Date;
  constructor(firstName: string, lastName: string, dateBirth: Date) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateBirth = dateBirth;
    this.uID = Guid.create().toString();
  }
}
