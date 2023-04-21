import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteMedicamentoComponent } from './reporte-medicamento.component';

describe('ReporteMedicamentoComponent', () => {
  let component: ReporteMedicamentoComponent;
  let fixture: ComponentFixture<ReporteMedicamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteMedicamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
