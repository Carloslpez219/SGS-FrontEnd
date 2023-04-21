import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertTratamientoComponent } from './insert-tratamiento.component';

describe('InsertTratamientoComponent', () => {
  let component: InsertTratamientoComponent;
  let fixture: ComponentFixture<InsertTratamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertTratamientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
