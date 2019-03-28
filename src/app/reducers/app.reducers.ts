import { ActionReducerMap } from "@ngrx/store";
import { Flight } from "../models/flight.model";
import * as flightReducers from "../reducers/flight.reducer";
import { Passenger } from "../models/passenger.model";
import * as passengerReducers from "../reducers/passenger.reducer";
import { Payment } from "../models/payment.model";
import * as paymentReducers from "../reducers/payment.reducer";
import * as idReducers from "../reducers/id.reducer";

export interface AppState {
  flights: Flight[];
  passengers: Passenger[];
  payments: Payment[];
  id: string;
}

export const reducers: ActionReducerMap<AppState> = {
  flights: flightReducers.flightReducer,
  passengers: passengerReducers.passengerReducer,
  payments: paymentReducers.paymentReducer,
  id: idReducers.idReducer
};
