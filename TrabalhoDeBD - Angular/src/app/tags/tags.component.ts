import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags$: object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getTags().subscribe(
      data => this.tags$ = data
    )
  }

}
