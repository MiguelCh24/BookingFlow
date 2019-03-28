import { Action } from "@ngrx/store";
import { Flight } from "../models/flight.model";
import { Guid } from 'guid-typescript';

export const ADD_FLIGHT = "[ADD] Add Flight";
export const DELETE_FLIGHT = "[DELETE] Delete Flight";
export const SET_FLIGHT = "[SET] Set Flights";

export class AddFlightAction implements Action {
  readonly type = ADD_FLIGHT;
  constructor(public flight: Flight) {}
}
export class DeleteFlightAction implements Action {
  readonly type = DELETE_FLIGHT;
  constructor(public uID: string) {}
}
export class SetFlightAction implements Action {
  readonly type = SET_FLIGHT;
  constructor(public flights: Flight[]) {}
}
export type Actions = AddFlightAction | DeleteFlightAction|SetFlightAction;
