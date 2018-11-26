import { Component, OnInit } from '@angular/core';
import { PackagesService } from 'src/app/services/packages.service';

@Component({
  selector: 'app-search-package-res',
  templateUrl: './search-package-res.component.html',
  styleUrls: ['./search-package-res.component.css']
})
export class SearchPackageResComponent implements OnInit {

  resultados = [];

  constructor(private packagesService: PackagesService) { }

  ngOnInit() {
    this.getResPackage();
  }

  getResPackage() {
    this.packagesService.getResPackage().subscribe(
      res => {
        this.resultados = res
        console.log(res);
      }
    )
  }

}
