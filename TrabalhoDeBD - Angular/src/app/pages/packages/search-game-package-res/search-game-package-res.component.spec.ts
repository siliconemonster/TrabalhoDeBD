import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGamePackageResComponent } from './search-game-package-res.component';

describe('SearchGamePackageResComponent', () => {
  let component: SearchGamePackageResComponent;
  let fixture: ComponentFixture<SearchGamePackageResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchGamePackageResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGamePackageResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
