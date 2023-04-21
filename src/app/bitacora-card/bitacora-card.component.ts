import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bitacora-card',
  templateUrl: './bitacora-card.component.html',
  styleUrls: ['./bitacora-card.component.css']
})
export class BitacoraCardComponent {
  @Input() id: any;
  @Input() incidencia: any;
  @Input() fechaHora: any;
  @Input() accion: any;
  @Input() usuario: any;
}
