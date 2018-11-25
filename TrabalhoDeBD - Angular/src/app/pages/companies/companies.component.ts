import { Component, OnInit } from '@angular/core';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies = [];
  
  constructor(private companiesService: CompaniesService) {}

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.companiesService.getCompanies().subscribe(
      res => {
        this.companies = res;
        console.log(res);
      }
    )
  }
}
