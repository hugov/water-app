import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCreateAndEditComponent } from './cliente-create-and-edit.component';

describe('ClienteCreateAndEditComponent', () => {
  let component: ClienteCreateAndEditComponent;
  let fixture: ComponentFixture<ClienteCreateAndEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteCreateAndEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteCreateAndEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
