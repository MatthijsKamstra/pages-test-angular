import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// import { AboutPageComponent } from "./page/about-page/about-page.component";
// import { DashboardPageComponent } from "./page/dashboard-page/dashboard-page.component";
import { HomePageComponent } from "./page/home-page/home-page.component";
import { NotFoundPageComponent } from "./page/not-found-page/not-found-page.component";

import { productRoutes } from "./route/product.route";
import { defaultRoutes } from "./route/default.route";

const PRODUCT_ROUTES = [...productRoutes];
const DEFAULT_ROUTES = [...defaultRoutes];

const routes: Routes = [
  { path: "", title: "Home", pathMatch: "full", redirectTo: "home" },
  { path: "home", title: "Home", component: HomePageComponent },
  // { path: "about", title: "About", component: AboutPageComponent },
  // { path: "dashboard", title: "Dashboard", component: DashboardPageComponent },
  ...PRODUCT_ROUTES,
  ...DEFAULT_ROUTES,
  { path: "**", title: "oeps", component: NotFoundPageComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

