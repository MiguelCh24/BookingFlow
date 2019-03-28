import { Component, OnInit } from "@angular/core";
import { AppState } from "src/app/reducers/app.reducers";
import { Store } from "@ngrx/store";
import { Passenger } from "src/app/models/passenger.model";
import * as generalActions from "src/app/actions/passenger.actions";

@Component({
  selector: "app-passenger-list",
  templateUrl: "./passenger-list.component.html",
  styles: []
})
export class PassengerListComponent implements OnInit {
  passengers: Passenger[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe(state => {
      this.passengers = state.passengers;
    });
  }
  deletePassenger(passenger: Passenger) {
    const action = new generalActions.DeletePassengerAction(passenger.uID);
    this.store.dispatch(action);
  }
}
