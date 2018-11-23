import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPackagesComponent } from './search-packages.component';

describe('SearchPackagesComponent', () => {
  let component: SearchPackagesComponent;
  let fixture: ComponentFixture<SearchPackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
