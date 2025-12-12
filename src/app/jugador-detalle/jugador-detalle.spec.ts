import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorDetalleComponent } from './jugador-detalle';

describe('JugadorDetalleComponent', () => {
  let component: JugadorDetalleComponent;
  let fixture: ComponentFixture<JugadorDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JugadorDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JugadorDetalleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
