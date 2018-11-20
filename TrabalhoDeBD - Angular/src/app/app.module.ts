import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { CompaniesComponent } from './companies/companies.component';
import { PackagesComponent } from './packages/packages.component';
import { UsersComponent } from './users/users.component';
import { TagsComponent } from './tags/tags.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    HomeComponent,
    GamesComponent,
    CompaniesComponent,
    PackagesComponent,
    UsersComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
