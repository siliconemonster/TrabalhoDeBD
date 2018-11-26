import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGameResComponent } from './search-game-res.component';

describe('SearchGameResComponent', () => {
  let component: SearchGameResComponent;
  let fixture: ComponentFixture<SearchGameResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchGameResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGameResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
