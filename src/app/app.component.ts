import { Component, OnInit } from "@angular/core";
import { Store, Action } from "@ngrx/store";

import { AppState } from "./reducers/app.reducers";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  // contador: number;
  // constructor(private store: Store<AppState>) {
  //   this.store.select("contador").subscribe(contador => {
  //     this.contador = contador;
  //   });
  // }
  // incrementar() {
  //   const action = new IncrementarAction();
  //   this.store.dispatch(action);
  // }
  // decrementar() {
  //   const action = new DecrementarAction();
  //   this.store.dispatch(action);
  // }
  ngOnInit() {}
}
