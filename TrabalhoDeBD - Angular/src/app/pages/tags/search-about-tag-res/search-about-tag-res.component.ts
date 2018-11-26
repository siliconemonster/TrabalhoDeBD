import { Component, OnInit } from '@angular/core';
import { TagsService } from 'src/app/services/tags.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-about-tag-res',
  templateUrl: './search-about-tag-res.component.html',
  styleUrls: ['./search-about-tag-res.component.css']
})
export class SearchAboutTagResComponent implements OnInit {

  resultados = [];

  constructor(private tagsService: TagsService) { }

  ngOnInit() {
    this.getResAboutTag();
  }

  getResAboutTag() {
    this.tagsService.getResAboutTag().subscribe(
      res => {
        this.resultados = res
        console.log(res);
      }
    )
  }

}
