import * as passengerActions from "../actions/passenger.actions";
import { Passenger } from "../models/passenger.model";

const initialState: Passenger[] = [];
export function passengerReducer(
  state = initialState,
  action: passengerActions.Actions
) {
  switch (action.type) {
    case passengerActions.ADD_PASSENGER:
      const flight = new Passenger(
        action.passenger.firstName,
        action.passenger.lastName,
        action.passenger.dateBirth
      );
      return [...state, flight];
    case passengerActions.DELETE_PASSENGER:
      return state.filter(e => e.uID !== action.uID);
      case passengerActions.SET_PASSENGER:
      return [
          ...action.passengers.map(item => {
            return {
              ...item
            };
          })
        ]
      
    default:
      return state;
  }
}
