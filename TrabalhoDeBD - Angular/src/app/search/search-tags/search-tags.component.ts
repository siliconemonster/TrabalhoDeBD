import { Component, OnInit } from '@angular/core';
import { TagsService } from 'src/app/services/tags.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-tags',
  templateUrl: './search-tags.component.html',
  styleUrls: ['./search-tags.component.css']
})
export class SearchTagsComponent implements OnInit {

  tags = [];

  constructor(private tagsService: TagsService, public router: Router) { }

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

  onSubmitAboutTag(searchAboutTags) {
    console.log(searchAboutTags);
    this.router.navigateByUrl('tags/searchAboutTag');
  }

  onSubmitGameTags(searchTags) {
    console.log(searchTags);
    this.router.navigateByUrl('tags/searchGameTags');
  }
}
