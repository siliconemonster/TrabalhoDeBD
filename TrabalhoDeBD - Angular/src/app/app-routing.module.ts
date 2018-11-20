import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { CompaniesComponent } from './companies/companies.component';
import { PackagesComponent } from './packages/packages.component';
import { UsersComponent } from './users/users.component';
import { TagsComponent } from './tags/tags.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'games',
    component: GamesComponent
  },
  {
    path: 'companies',
    component: CompaniesComponent
  },
  {
    path: 'packages',
    component: PackagesComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'tags',
    component: TagsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
