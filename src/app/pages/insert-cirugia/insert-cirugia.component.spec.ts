import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCirugiaComponent } from './insert-cirugia.component';

describe('InsertCirugiaComponent', () => {
  let component: InsertCirugiaComponent;
  let fixture: ComponentFixture<InsertCirugiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertCirugiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertCirugiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
