import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bitacora-traspasos-card',
  templateUrl: './bitacora-traspasos-card.component.html',
  styleUrls: ['./bitacora-traspasos-card.component.css']
})
export class BitacoraTraspasosCardComponent {

  @Input() idBitacora: any;
  @Input() cui: any;
  @Input() fechaIngreso: any;
  @Input() fechaRetiro: any;
  @Input() idCentroMedico: any;

}
