import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShoesComponent } from './add-shoes.component';

describe('AddShoesComponent', () => {
  let component: AddShoesComponent;
  let fixture: ComponentFixture<AddShoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
