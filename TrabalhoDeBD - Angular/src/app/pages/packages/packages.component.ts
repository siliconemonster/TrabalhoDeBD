import { Component, OnInit } from '@angular/core';
import { PackagesService } from 'src/app/services/packages.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  packages = [];

  constructor(private packageService: PackagesService) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.packageService.getPackages().subscribe(
      res => {
        this.packages = res;
        console.log(res);
      }
    )
  }

}
