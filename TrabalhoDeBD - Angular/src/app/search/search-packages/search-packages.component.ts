import { Component, OnInit } from '@angular/core';
import { PackagesService } from 'src/app/services/packages.service';

@Component({
  selector: 'app-search-packages',
  templateUrl: './search-packages.component.html',
  styleUrls: ['./search-packages.component.css']
})
export class SearchPackagesComponent implements OnInit {

  constructor(public packegesService: PackagesService) { }

  ngOnInit() {

  }

  onSubmitPackage(searchPackages) {
    console.log(searchPackages);
  }

  onSubmitGamePackage(searcheGamePackage) {
    console.log(searcheGamePackage);
  }
}
