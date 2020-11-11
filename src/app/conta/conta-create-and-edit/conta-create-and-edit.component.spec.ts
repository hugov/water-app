import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaCreateAndEditComponent } from './conta-create-and-edit.component';

describe('ContaCreateAndEditComponent', () => {
  let component: ContaCreateAndEditComponent;
  let fixture: ComponentFixture<ContaCreateAndEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaCreateAndEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaCreateAndEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
