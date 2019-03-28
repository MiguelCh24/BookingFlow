import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
//Routes
import { APP_ROUTING } from "./app.routes";
//NgRx
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { reducers } from "./reducers/app.reducers";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { environment } from "src/environments/environment";
import { HeaderComponent } from "./components/header/header.component";
import { MainComponent } from "./components/main/main.component";
import { FligthAddComponent } from "./components/main/flight/flight-add/flight-add.component";
import { PaymentAddComponent } from "./components/main/payment/payment-add/payment-add.component";
import { PaymentListComponent } from "./components/main/payment/payment-list/payment-list.component";
import { FlightListComponent } from "./components/main/flight/flight-list/flight-list.component";
import { PassengerListComponent } from "./components/main/passenger/passenger-list/passenger-list.component";
import { PassengerAddComponent } from "./components/main/passenger/passenger-add/passenger-add.component";
import { FormsModule } from "@angular/forms";

import { NumberOnlyDirective } from "src/app/directives/digitOnly.directive";
import { PriceFormatDirective } from "src/app/directives/priceFormat.directive";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ListDetailComponent } from './components/list-detail/list-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FligthAddComponent,
    PaymentAddComponent,
    PaymentListComponent,
    FlightListComponent,
    PassengerListComponent,
    PassengerAddComponent,
    NumberOnlyDirective,
    PriceFormatDirective,
    ListDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    AppRoutingModule,
    APP_ROUTING,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
