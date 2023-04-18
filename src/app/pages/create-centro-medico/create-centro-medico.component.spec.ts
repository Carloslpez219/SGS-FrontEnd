import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCentroMedicoComponent } from './create-centro-medico.component';

describe('CreateCentroMedicoComponent', () => {
  let component: CreateCentroMedicoComponent;
  let fixture: ComponentFixture<CreateCentroMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCentroMedicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCentroMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
