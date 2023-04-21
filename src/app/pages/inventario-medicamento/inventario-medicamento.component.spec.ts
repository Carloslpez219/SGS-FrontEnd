import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioMedicamentoComponent } from './inventario-medicamento.component';

describe('InventarioMedicamentoComponent', () => {
  let component: InventarioMedicamentoComponent;
  let fixture: ComponentFixture<InventarioMedicamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarioMedicamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
