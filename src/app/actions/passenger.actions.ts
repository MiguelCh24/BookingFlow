import { Action } from "@ngrx/store";
import { Passenger } from "../models/passenger.model";
import { Guid } from "guid-typescript";

export const ADD_PASSENGER = "[ADD] Add Passenger";
export const DELETE_PASSENGER = "[DELETE] Delete Passenger";
export const SET_PASSENGER = "[SET] Set Passengers";

export class AddPassengerAction implements Action {
  readonly type = ADD_PASSENGER;
  constructor(public passenger: Passenger) {}
}
export class DeletePassengerAction implements Action {
  readonly type = DELETE_PASSENGER;
  constructor(public uID: string) {}
}
export class SetPassengerAction implements Action {
  readonly type = SET_PASSENGER;
  constructor(public passengers: Passenger[]) {}
}
export type Actions =
  | AddPassengerAction
  | DeletePassengerAction
  | SetPassengerAction;
