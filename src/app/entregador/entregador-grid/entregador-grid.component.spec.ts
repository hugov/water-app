import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregadorGridComponent } from './entregador-grid.component';

describe('EntregadorGridComponent', () => {
  let component: EntregadorGridComponent;
  let fixture: ComponentFixture<EntregadorGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntregadorGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregadorGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
