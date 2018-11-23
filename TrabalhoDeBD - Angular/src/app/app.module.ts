import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { GamesComponent } from './pages/games/games.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { UsersComponent } from './pages/users/users.component';
import { TagsComponent } from './pages/tags/tags.component';

import { SearchGamesComponent } from './search/search-games/search-games.component';
import { SearchTagsComponent } from './search/search-tags/search-tags.component'; 

import { HttpClientModule } from '@angular/common/http';

import { ContactComponent } from './search/contact/contact.component';
import { SearchPackagesComponent } from './search/search-packages/search-packages.component';
import { SearchCompaniesComponent } from './search/search-companies/search-companies.component';
import { SearchUsersComponent } from './search/search-users/search-users.component'; //delete

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
    SearchTagsComponent,
    SearchPackagesComponent,
    SearchCompaniesComponent,
    SearchUsersComponent
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
