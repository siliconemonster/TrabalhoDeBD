import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { TagsService } from 'src/app/services/tags.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags = [];

  constructor(private tagsService: TagsService) { }

  ngOnInit() {
    this.getTags();
  }

  getTags() {
    this.tagsService.getTags().subscribe(
      res => {
        this.tags = res
        console.log(res);
      }
    )
  }

}
