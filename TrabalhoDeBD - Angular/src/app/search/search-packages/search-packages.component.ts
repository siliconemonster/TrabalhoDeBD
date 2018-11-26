import { Component, OnInit } from '@angular/core';
import { PackagesService } from 'src/app/services/packages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-packages',
  templateUrl: './search-packages.component.html',
  styleUrls: ['./search-packages.component.css']
})
export class SearchPackagesComponent implements OnInit {

  constructor(public packegesService: PackagesService, public router: Router) { }

  ngOnInit() {

  }

  onSubmitPackage(searchPackages) {
    console.log(searchPackages);
    this.router.navigateByUrl('packages/searchPackage');
  }

  onSubmitGamePackage(searcheGamePackage) {
    console.log(searcheGamePackage);
    this.router.navigateByUrl('packages/searchGamePackage');
  }
}
