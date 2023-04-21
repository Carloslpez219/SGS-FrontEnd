import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteMuertesComponent } from './reporte-muertes.component';

describe('ReporteMuertesComponent', () => {
  let component: ReporteMuertesComponent;
  let fixture: ComponentFixture<ReporteMuertesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteMuertesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteMuertesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
