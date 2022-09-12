
import { Routes } from "@angular/router";


import { StyleguideComponent } from "../page/styleguide/styleguide.component";
import { UsersPageComponent } from "../page/users-page/users-page.component";


export const testRoutes: Routes = [
	{ path: "styleguide", title: "Styleguide", component: StyleguideComponent },
	{ path: "api-test-a", title: "api-test-a", component: UsersPageComponent },
	{ path: "api-test-b", title: "api-test-b", component: StyleguideComponent },
];

