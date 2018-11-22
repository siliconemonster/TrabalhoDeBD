import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { CompaniesComponent } from './companies/companies.component';
import { PackagesComponent } from './packages/packages.component';
import { UsersComponent } from './users/users.component';
import { TagsComponent } from './tags/tags.component';

import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './search/contact/contact.component';
import { SearchGamesComponent } from './search/search-games/search-games.component';
import { SearchTagsComponent } from './search/search-tags/search-tags.component'; //for my dummy db

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GamesComponent,
    CompaniesComponent,
    PackagesComponent,
    UsersComponent,
    TagsComponent,
    ContactComponent,
    SearchGamesComponent,
    SearchTagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
