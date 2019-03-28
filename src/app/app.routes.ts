import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./components/main/main.component";
import { ListDetailComponent } from "./components/list-detail/list-detail.component";

const APP_ROUTES: Routes = [
  { path: "main", component: MainComponent },
  { path: "detail", component: ListDetailComponent },
  { path: "**", pathMatch: "full", redirectTo: "main" }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
