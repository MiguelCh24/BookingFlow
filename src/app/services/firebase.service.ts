import { Injectable } from "@angular/core";
import { Flight } from "src/app/models/flight.model";
import { AngularFirestore } from "angularfire2/firestore";
import { Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "../reducers/app.reducers";
import { map, filter } from "rxjs/operators";
import { Passenger } from "../models/passenger.model";
import { Payment } from "../models/payment.model";
import { Guid } from "guid-typescript";
import { SetFlightAction } from "../actions/flight.actions";
import { SetPassengerAction } from "../actions/passenger.actions";
@Injectable({
  providedIn: "root"
})
export class FireBaseService {
  listDetailsSubcription: Subscription = new Subscription();

  // Inject AngularFireDatabase Dependency in Constructor
  constructor(private afDB: AngularFirestore, private store: Store<AppState>) {}

  initIngresoEgresoListener(id: string) {
    this.listDetailsSubcription = this.afDB
      .collection(`${id}/flights/items`)
      .snapshotChanges()
      .pipe(
        map(docData => {
          return docData.map(doc => {
            return {
              ...doc.payload.doc.data()
            };
          });
        })
      )
      .subscribe((coleccion: any[]) => {
        this.store.dispatch(new SetFlightAction(coleccion));
      });
    this.listDetailsSubcription = this.afDB
      .collection(`${id}/passengers/items`)
      .snapshotChanges()
      .pipe(
        map(docData => {
          return docData.map(doc => {
            return {
              uid: doc.payload.doc.id,
              ...doc.payload.doc.data()
            };
          });
        })
      )
      .subscribe((coleccion: any[]) => {
        this.store.dispatch(new SetPassengerAction(coleccion));
      });
    this.listDetailsSubcription = this.afDB
      .collection(`${id}/payments/items`)
      .snapshotChanges()
      .pipe(
        map(docData => {
          return docData.map(doc => {
            return {
              uid: doc.payload.doc.id,
              ...doc.payload.doc.data()
            };
          });
        })
      )
      .subscribe((coleccion: any[]) => {
        this.store.dispatch(new SetPassengerAction(coleccion));
      });
  }

  createRegister(
    flights: Flight[],
    passengers: Passenger[],
    payments: Payment[],
    id: string
  ) {
    flights.map(e => {
      this.afDB
        .doc(`${id}/flights`)
        .collection("items")
        .add({ ...e });
    });
    passengers.map(e => {
      this.afDB
        .doc(`${id}/passengers`)
        .collection("items")
        .add({ ...e });
    });
    payments.map(e => {
      this.afDB
        .doc(`${id}/payments`)
        .collection("items")
        .add({ ...e });
    });
  }
}
