import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteMedicosComponent } from './reporte-medicos.component';

describe('ReporteMedicosComponent', () => {
  let component: ReporteMedicosComponent;
  let fixture: ComponentFixture<ReporteMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteMedicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
