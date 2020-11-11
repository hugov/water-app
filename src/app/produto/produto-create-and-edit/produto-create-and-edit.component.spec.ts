import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoCreateAndEditComponent } from './produto-create-and-edit.component';

describe('ProdutoCreateAndEditComponent', () => {
  let component: ProdutoCreateAndEditComponent;
  let fixture: ComponentFixture<ProdutoCreateAndEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoCreateAndEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoCreateAndEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
