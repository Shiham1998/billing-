import { ComponentFixture, TestBed } from '@angular/core/testing';
 import {  AddEditoutletComponent } from './addedit-outlet.component';

describe('AddEditoutletComponent', () => {
  let component: AddEditoutletComponent;
  let fixture: ComponentFixture<AddEditoutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditoutletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditoutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
