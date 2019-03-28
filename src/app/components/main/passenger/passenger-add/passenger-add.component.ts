import { Component, OnInit } from "@angular/core";
import { Passenger } from "src/app/models/passenger.model";
import * as generalActions from "src/app/actions/passenger.actions";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/reducers/app.reducers";

@Component({
  selector: "app-passenger-add",
  templateUrl: "./passenger-add.component.html",
  styles: []
})
export class PassengerAddComponent implements OnInit {
  maxDate;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    let dateNow = new Date(); 
    this.maxDate = {
      year: dateNow.getFullYear(),
      month: dateNow.getMonth() + 1,
      day: dateNow.getDate()
    };
  }
  minDate() {
    return new Date();
  }
  submit(form) {
    let dateBirth = new Date(
      form.value.dateBirthNgb.year,
      form.value.dateBirthNgb.month - 1,
      form.value.dateBirthNgb.day
    );
    form.value.dateBirth = dateBirth;
    let passenger: Passenger = Object.assign({}, form.value);
    const action = new generalActions.AddPassengerAction(passenger);
    this.store.dispatch(action);
    form.reset();
  }
}
