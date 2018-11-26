import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGameTagsResComponent } from './search-game-tags-res.component';

describe('SearchGameTagsResComponent', () => {
  let component: SearchGameTagsResComponent;
  let fixture: ComponentFixture<SearchGameTagsResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchGameTagsResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGameTagsResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
