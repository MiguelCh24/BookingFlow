import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/reducers/app.reducers";
import { Payment } from "src/app/models/payment.model";
import * as generalActions from "src/app/actions/payment.actions";

@Component({
  selector: "app-payment-add",
  templateUrl: "./payment-add.component.html",
  styles: []
})
export class PaymentAddComponent implements OnInit {
  listMonths = [
    { id: "00", text: "00" },
    { id: "01", text: "01" },
    { id: "02", text: "02" },
    { id: "03", text: "03" },
    { id: "04", text: "04" },
    { id: "05", text: "05" },
    { id: "06", text: "06" },
    { id: "07", text: "07" },
    { id: "08", text: "08" },
    { id: "09", text: "09" },
    { id: "10", text: "10" },
    { id: "11", text: "11" },
    { id: "12", text: "12" }
  ];
  listYears = [
    { id: "2019", text: "2019" },
    { id: "2020", text: "2020" },
    { id: "2021", text: "2021" },
    { id: "2022", text: "2022" },
    { id: "2023", text: "2023" },
    { id: "2024", text: "2024" },
    { id: "2025", text: "2025" },
    { id: "2026", text: "2026" },
    { id: "2027", text: "020278" },
    { id: "2028", text: "2028" },
    { id: "2029", text: "2029" },
    { id: "2030", text: "2030" }
  ];
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}
  submit(form) {
    let payment: Payment = Object.assign({}, form.value);
    const action = new generalActions.AddPaymentAction(payment);
    this.store.dispatch(action);
    form.reset();
  }
}
