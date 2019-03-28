import * as idActions from "../actions/id.actions";

let initialState: "";
export function idReducer(state = initialState, action: idActions.Actions) {
  switch (action.type) {
    case idActions.SET_ID:
      return action.id;
    default:
      return state;
  }
}
