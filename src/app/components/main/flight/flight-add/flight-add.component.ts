import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/reducers/app.reducers";
import * as generalActions from "src/app/actions/flight.actions";
import { Flight } from "src/app/models/flight.model";

@Component({
  selector: "app-flight-add",
  templateUrl: "./flight.add.component.html",
  styles: []
})
export class FligthAddComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  model;
  ngOnInit() {}
  submit(form) {
    let departureDate = new Date(
      form.value.departureDateNgb.year,
      form.value.departureDateNgb.month - 1,
      form.value.departureDateNgb.day
    );
    form.value.departureDate = departureDate;
    let flight: Flight = Object.assign({}, form.value);
    const action = new generalActions.AddFlightAction(flight);
    this.store.dispatch(action);
    form.reset();
  }
}
