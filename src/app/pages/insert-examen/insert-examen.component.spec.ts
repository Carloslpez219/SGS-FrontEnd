import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertExamenComponent } from './insert-examen.component';

describe('InsertExamenComponent', () => {
  let component: InsertExamenComponent;
  let fixture: ComponentFixture<InsertExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertExamenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
