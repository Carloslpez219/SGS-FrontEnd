import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertInventarioMedicamentoComponent } from './insert-inventario-medicamento.component';

describe('InsertInventarioMedicamentoComponent', () => {
  let component: InsertInventarioMedicamentoComponent;
  let fixture: ComponentFixture<InsertInventarioMedicamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertInventarioMedicamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertInventarioMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
