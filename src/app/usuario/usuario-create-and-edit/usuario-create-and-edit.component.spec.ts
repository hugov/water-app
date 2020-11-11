import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCreateAndEditComponent } from './usuario-create-and-edit.component';

describe('UsuarioCreateAndEditComponent', () => {
  let component: UsuarioCreateAndEditComponent;
  let fixture: ComponentFixture<UsuarioCreateAndEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioCreateAndEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioCreateAndEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
