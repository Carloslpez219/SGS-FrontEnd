import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitacoraCardComponent } from './bitacora-card.component';

describe('BitacoraCardComponent', () => {
  let component: BitacoraCardComponent;
  let fixture: ComponentFixture<BitacoraCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitacoraCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BitacoraCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
