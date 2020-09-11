import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteShoesComponent } from './delete-shoes.component';

describe('DeleteShoesComponent', () => {
  let component: DeleteShoesComponent;
  let fixture: ComponentFixture<DeleteShoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteShoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
