import { Component, OnInit } from '@angular/core';
import { TagsService } from 'src/app/services/tags.service';

@Component({
  selector: 'app-search-game-tags-res',
  templateUrl: './search-game-tags-res.component.html',
  styleUrls: ['./search-game-tags-res.component.css']
})
export class SearchGameTagsResComponent implements OnInit {

  resultados = [];

  constructor(private tagsService: TagsService) { }

  ngOnInit() {
    this.getResGameTags();
  }

  getResGameTags() {
    this.tagsService.getResAboutTag().subscribe(
      res => {
        this.resultados = res
        console.log(res);
      }
    )
  }

}
