import * as paymentActions from "../actions/payment.actions";
import { Payment } from "../models/payment.model";

const initialState: Payment[] = [];
export function paymentReducer(
  state = initialState,
  action: paymentActions.Actions
) {
  switch (action.type) {
    case paymentActions.ADD_PAYMENT:
      const flight = new Payment(
        action.payment.number,
        action.payment.month,
        action.payment.year,
        action.payment.cvc,
        action.payment.name
      );
      return [...state, flight];
    case paymentActions.DELETE_PAYMENT:
      return state.filter(e => e.uID !== action.uID);
    case paymentActions.SET_PAYMENT:
      return [
        ...action.payments.map(item => {
          return {
            ...item
          };
        })
      ];

    default:
      return state;
  }
}
