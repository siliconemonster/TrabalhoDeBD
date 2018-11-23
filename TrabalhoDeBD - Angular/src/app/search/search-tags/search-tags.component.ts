import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-search-tags',
  templateUrl: './search-tags.component.html',
  styleUrls: ['./search-tags.component.css']
})
export class SearchTagsComponent implements OnInit {

  tags$: object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getTags().subscribe(
      data => this.tags$ = data
    )
  }

}
