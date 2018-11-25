import { Component, OnInit } from '@angular/core';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  selector: 'app-search-companies',
  templateUrl: './search-companies.component.html',
  styleUrls: ['./search-companies.component.css']
})
export class SearchCompaniesComponent implements OnInit {

  constructor(public companiesService: CompaniesService) {}

  ngOnInit() {
  }

  onSubmitCompanies(searchCompanies) {
    console.log(searchCompanies);
  }
}
