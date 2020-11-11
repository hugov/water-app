import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoSearchComponent } from './pedido-search.component';

describe('PedidoSearchComponent', () => {
  let component: PedidoSearchComponent;
  let fixture: ComponentFixture<PedidoSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
