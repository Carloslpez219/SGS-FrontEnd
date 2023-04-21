import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteUnidadesComponent } from './reporte-unidades.component';

describe('ReporteUnidadesComponent', () => {
  let component: ReporteUnidadesComponent;
  let fixture: ComponentFixture<ReporteUnidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteUnidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteUnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
