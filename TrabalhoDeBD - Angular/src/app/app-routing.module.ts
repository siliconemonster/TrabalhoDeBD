import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './pages/games/games.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { UsersComponent } from './pages/users/users.component';
import { TagsComponent } from './pages/tags/tags.component';
import { HomeComponent } from './pages/home/home.component';

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
