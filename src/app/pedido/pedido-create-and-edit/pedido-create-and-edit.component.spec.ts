import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoCreateAndEditComponent } from './pedido-create-and-edit.component';

describe('PedidoCreateAndEditComponent', () => {
  let component: PedidoCreateAndEditComponent;
  let fixture: ComponentFixture<PedidoCreateAndEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoCreateAndEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoCreateAndEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
