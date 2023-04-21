import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitacoraTraspasosCardComponent } from './bitacora-traspasos-card.component';

describe('BitacoraTraspasosCardComponent', () => {
  let component: BitacoraTraspasosCardComponent;
  let fixture: ComponentFixture<BitacoraTraspasosCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitacoraTraspasosCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BitacoraTraspasosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
