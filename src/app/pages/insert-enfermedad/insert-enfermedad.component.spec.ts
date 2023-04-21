import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertEnfermedadComponent } from './insert-enfermedad.component';

describe('InsertEnfermedadComponent', () => {
  let component: InsertEnfermedadComponent;
  let fixture: ComponentFixture<InsertEnfermedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertEnfermedadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertEnfermedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
