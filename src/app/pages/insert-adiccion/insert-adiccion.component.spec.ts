import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertAdiccionComponent } from './insert-adiccion.component';

describe('InsertAdiccionComponent', () => {
  let component: InsertAdiccionComponent;
  let fixture: ComponentFixture<InsertAdiccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertAdiccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertAdiccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
