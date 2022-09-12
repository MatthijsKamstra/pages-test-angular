
import { Routes } from "@angular/router";
import { HomePageComponent } from "../page/home-page/home-page.component";
import { AboutPageComponent } from "../page/about-page/about-page.component";
import { DashboardPageComponent } from "../page/dashboard-page/dashboard-page.component";
import { StyleguideComponent } from "../page/styleguide/styleguide.component";
import { UsersPageComponent } from "../page/users-page/users-page.component";

export const defaultRoutes: Routes = [
	{ path: "home", title: "Home", component: HomePageComponent },
	{ path: "about", title: "About", component: AboutPageComponent },
	{ path: "dashboard", title: "Dashboard", component: DashboardPageComponent },
	{ path: "styleguide", title: "Styleguide", component: StyleguideComponent },
	{ path: "users", title: "Users", component: UsersPageComponent },
];

