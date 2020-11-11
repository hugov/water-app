import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregadorCreateAndEditComponent } from './entregador-create-and-edit.component';

describe('EntregadorCreateAndEditComponent', () => {
  let component: EntregadorCreateAndEditComponent;
  let fixture: ComponentFixture<EntregadorCreateAndEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntregadorCreateAndEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregadorCreateAndEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
