import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { HeroComponent } from './component/hero/hero.component';
import { FooterComponent } from './component/footer/footer.component';
import { IconsComponent } from './element/icons/icons.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { AboutPageComponent } from './page/about-page/about-page.component';
import { DashboardPageComponent } from './page/dashboard-page/dashboard-page.component';
import { UsersPageComponent } from './page/users-page/users-page.component';
import { ProductsPageComponent } from './page/products-page/products-page.component';
import { ProductsInfoPageComponent } from './page/products-info-page/products-info-page.component';
import { NotFoundPageComponent } from './page/not-found-page/not-found-page.component';
import { StyleguideComponent } from './page/styleguide/styleguide.component';
import { ColorsComponent } from './page/styleguide/colors/colors.component';
import { TestPipe } from './_test/test.pipe';
import { TestComponent } from './_test/test/test.component';
import { CodeComponent } from './component/code/code.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    FooterComponent,
    IconsComponent,
    HomePageComponent,
    AboutPageComponent,
    DashboardPageComponent,
    UsersPageComponent,
    ProductsPageComponent,
    ProductsInfoPageComponent,
    NotFoundPageComponent,
    StyleguideComponent,
    ColorsComponent,
    TestPipe,
    TestComponent,
    CodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
