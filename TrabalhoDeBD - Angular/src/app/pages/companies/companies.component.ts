import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies$: object;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getCompanies().subscribe(
      data => this.companies$ = data
    )
  }

}
