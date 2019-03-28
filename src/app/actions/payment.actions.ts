import { Action } from "@ngrx/store";
import { Payment } from "../models/payment.model";
import { Guid } from "guid-typescript";

export const ADD_PAYMENT = "[ADD] Add Payment Detail";
export const DELETE_PAYMENT = "[DELETE] Delete Payment Detail";
export const SET_PAYMENT = "[SET] Set Payment Detail";

export class AddPaymentAction implements Action {
  readonly type = ADD_PAYMENT;
  constructor(public payment: Payment) {}
}
export class DeletePaymentAction implements Action {
  readonly type = DELETE_PAYMENT;
  constructor(public uID: string) {}
}
export class SetPaymentAction implements Action {
  readonly type = SET_PAYMENT;
  constructor(public payments: Payment[]) {}
}
export type Actions = AddPaymentAction | DeletePaymentAction | SetPaymentAction;
