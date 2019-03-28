import * as flightActions from "../actions/flight.actions";
import { Flight } from "../models/flight.model";

const initialState: Flight[] = [];
export function flightReducer(
  state = initialState,
  action: flightActions.Actions
) {
  switch (action.type) {
    case flightActions.ADD_FLIGHT:
      const flight = new Flight(
        action.flight.origin,
        action.flight.destination,
        action.flight.departureDate,
        action.flight.price
      );
      return [...state, flight];
    case flightActions.DELETE_FLIGHT:
      return state.filter(e => e.uID !== action.uID);

    case flightActions.SET_FLIGHT:
      return [
        ...action.flights.map(item => {
          return {
            ...item
          };
        })
      ];

    default:
      return state;
  }
}
