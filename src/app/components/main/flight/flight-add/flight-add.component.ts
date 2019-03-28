import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/reducers/app.reducers";
import * as generalActions from "src/app/actions/flight.actions";
import { Flight } from "src/app/models/flight.model";
import { Observable } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { resource } from "src/app/shared/resource.shared";

@Component({
  selector: "app-flight-add",
  templateUrl: "./flight.add.component.html",
  styles: []
})
export class FligthAddComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  model;
  minDate;
  searchOrigin: string[] = new resource().getAirports();
  searchDestination: string[] = new resource().getAirports();
  ngOnInit() {
    let dateNow = new Date();
    this.minDate = {
      year: dateNow.getFullYear(),
      month: dateNow.getMonth() + 1,
      day: dateNow.getDate()
    };
  }
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
  searchOriginAction = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term =>
        term.length < 2
          ? []
          : this.searchOrigin
              .filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
              .slice(0, 10)
      )
    );
  searchDestinationAction = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term =>
        term.length < 2
          ? []
          : this.searchDestination
              .filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
              .slice(0, 10)
      )
    );
}
