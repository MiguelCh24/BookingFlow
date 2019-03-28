import { Action } from "@ngrx/store";

export const SET_ID = "[SET] Set id";

export class SetIdAction implements Action {
  readonly type = SET_ID;
  constructor(public id: string) {}
}
export type Actions = SetIdAction ;
