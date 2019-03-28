import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/reducers/app.reducers";
import { Payment } from "src/app/models/payment.model";
import * as generalActions from "src/app/actions/payment.actions";
import { resource } from "src/app/shared/resource.shared";

@Component({
  selector: "app-payment-add",
  templateUrl: "./payment-add.component.html",
  styles: []
})
export class PaymentAddComponent implements OnInit {
  listMonths: any[] = new resource().getListMonths();
  listYears: any[] = new resource().getListYears();
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}
  submit(form) {
    let payment: Payment = Object.assign({}, form.value);
    const action = new generalActions.AddPaymentAction(payment);
    this.store.dispatch(action);
    form.reset();
  }
}
