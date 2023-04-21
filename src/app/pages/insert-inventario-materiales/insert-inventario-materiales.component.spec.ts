import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertInventarioMaterialesComponent } from './insert-inventario-materiales.component';

describe('InsertInventarioMaterialesComponent', () => {
  let component: InsertInventarioMaterialesComponent;
  let fixture: ComponentFixture<InsertInventarioMaterialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertInventarioMaterialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertInventarioMaterialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
