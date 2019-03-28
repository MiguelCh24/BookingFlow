import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/reducers/app.reducers";
import * as generalActions from "src/app/actions/flight.actions";
import { Flight } from "src/app/models/flight.model";

@Component({
  selector: "app-flight-list",
  templateUrl: "./flight-list.component.html",
  styles: []
})
export class FlightListComponent implements OnInit {
  flights: Flight[] = [];
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe(state => {
      this.flights = state.flights;
    });
  }
  deleteFlight(flight: Flight) {
    const action = new generalActions.DeleteFlightAction(flight.uID);
    this.store.dispatch(action);
  }
}
