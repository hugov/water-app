import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregadorSearchComponent } from './entregador-search.component';

describe('EntregadorSearchComponent', () => {
  let component: EntregadorSearchComponent;
  let fixture: ComponentFixture<EntregadorSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntregadorSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregadorSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
