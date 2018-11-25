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


import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SearchPackagesComponent } from './search/search-packages/search-packages.component';
import { SearchCompaniesComponent } from './search/search-companies/search-companies.component';
import { SearchUsersComponent } from './search/search-users/search-users.component'; 
import { SearchGamesComponent } from './search/search-games/search-games.component';
import { SearchTagsComponent } from './search/search-tags/search-tags.component'; 

import { GamesService } from './services/games.service';
import { PackagesService } from './services/packages.service';
import { UsersService } from './services/users.service';
import { TagsService } from './services/tags.service';
import { CompaniesService } from './services/companies.service';

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
    SearchGamesComponent,
    SearchTagsComponent,
    SearchPackagesComponent,
    SearchCompaniesComponent,
    SearchUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GamesService,
    CompaniesService,
    PackagesService,
    UsersService,
    TagsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
