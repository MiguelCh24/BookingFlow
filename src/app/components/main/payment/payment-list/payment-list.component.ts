import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/reducers/app.reducers";
import { Payment } from "src/app/models/payment.model";
import * as generalActions from "src/app/actions/payment.actions";
@Component({
  selector: "app-payment-list",
  templateUrl: "./payment-list.component.html",
  styles: []
})
export class PaymentListComponent implements OnInit {
  payments: Payment[] = [];
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe(state => {
      this.payments = state.payments;
    });
  }
  deletePayment(payment: Payment) {
    const action = new generalActions.DeletePaymentAction(payment.uID);
    this.store.dispatch(action);
  }
}
