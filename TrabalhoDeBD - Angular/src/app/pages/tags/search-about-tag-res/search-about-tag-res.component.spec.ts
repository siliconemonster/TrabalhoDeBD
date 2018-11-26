import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAboutTagResComponent } from './search-about-tag-res.component';

describe('SearchAboutTagResComponent', () => {
  let component: SearchAboutTagResComponent;
  let fixture: ComponentFixture<SearchAboutTagResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAboutTagResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAboutTagResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
