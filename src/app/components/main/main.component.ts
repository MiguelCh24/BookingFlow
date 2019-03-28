import { Component, OnInit } from "@angular/core";
import { FireBaseService } from "src/app/services/firebase.service";
import { Flight } from "src/app/models/flight.model";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/reducers/app.reducers";
import { Passenger } from "src/app/models/passenger.model";
import { Payment } from "src/app/models/payment.model";
import { Guid } from "guid-typescript";
import Swal from "sweetalert2";
import * as generalActions from "src/app/actions/id.actions";
import { Router } from '@angular/router';

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styles: []
})
export class MainComponent implements OnInit {
  flights: Flight[] = [];
  passengers: Passenger[] = [];
  payments: Payment[] = [];

  constructor(
    private fireBaseService: FireBaseService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.store.subscribe(state => {
      this.flights = state.flights;
      this.passengers = state.passengers;
      this.payments = state.payments;
    });
  }
  processForm() {
    let id = Guid.create().toString();
    this.fireBaseService.createRegister(
      this.flights,
      this.passengers,
      this.payments,
      id
    );
    const action = new generalActions.SetIdAction(id);
    this.store.dispatch(action);
    this.router.navigate(['/detail']);
    //Swal("Creado", "", "success");
  }
}
