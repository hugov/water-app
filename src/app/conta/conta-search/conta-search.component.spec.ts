import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaSearchComponent } from './conta-search.component';

describe('ContaSearchComponent', () => {
  let component: ContaSearchComponent;
  let fixture: ComponentFixture<ContaSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
