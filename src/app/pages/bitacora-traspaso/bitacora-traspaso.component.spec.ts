import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitacoraTraspasoComponent } from './bitacora-traspaso.component';

describe('BitacoraTraspasoComponent', () => {
  let component: BitacoraTraspasoComponent;
  let fixture: ComponentFixture<BitacoraTraspasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitacoraTraspasoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BitacoraTraspasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
