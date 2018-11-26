import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPackageResComponent } from './search-package-res.component';

describe('SearchPackageResComponent', () => {
  let component: SearchPackageResComponent;
  let fixture: ComponentFixture<SearchPackageResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPackageResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPackageResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
