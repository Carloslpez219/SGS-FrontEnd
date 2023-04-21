import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitacoraHistorialComponent } from './bitacora-historial.component';

describe('BitacoraHistorialComponent', () => {
  let component: BitacoraHistorialComponent;
  let fixture: ComponentFixture<BitacoraHistorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitacoraHistorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BitacoraHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
