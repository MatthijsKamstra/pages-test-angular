import { Component, OnInit } from '@angular/core';

import { Routes } from "@angular/router";
import { defaultRoutes } from "../../route/default.route";
import { productRoutes } from "../../route/product.route";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  productRoutes: Routes = productRoutes;
defaultRoutes: Routes = defaultRoutes;
constructor() { }

  ngOnInit(): void {
  }

}
