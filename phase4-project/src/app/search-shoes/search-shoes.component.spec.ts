import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchShoesComponent } from './search-shoes.component';

describe('SearchShoesComponent', () => {
  let component: SearchShoesComponent;
  let fixture: ComponentFixture<SearchShoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchShoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
