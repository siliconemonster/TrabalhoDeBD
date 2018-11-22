import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  packages$: object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPackages().subscribe(
      data => this.packages$ = data
    )
  }

}
