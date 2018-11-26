import { Component, OnInit } from '@angular/core';
import { PackagesService } from 'src/app/services/packages.service';

@Component({
  selector: 'app-search-game-package-res',
  templateUrl: './search-game-package-res.component.html',
  styleUrls: ['./search-game-package-res.component.css']
})
export class SearchGamePackageResComponent implements OnInit {

  resultados = [];

  constructor(private packagesService: PackagesService) { }

  ngOnInit() {
    this.getResGamePackage();
  }

  getResGamePackage() {
    this.packagesService.getResGamePackage().subscribe(
      res => {
        this.resultados = res
        console.log(res);
      }
    )
  }

}
