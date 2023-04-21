import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-detalle-incidencia',
  templateUrl: './detalle-incidencia.component.html',
  styleUrls: ['./detalle-incidencia.component.css']
})
export class DetalleIncidenciaComponent {

  enfermedades: any;
  examenes: any;
  cirugias: any;
  adicciones: any;
  tratamientos: any;

  constructor(private userService: UserService){
    const incidencia = sessionStorage.getItem('incidencia'); 
      const params = {
        id_incidencia: incidencia
      };
  
      this.userService.getEnfermedadesIncidencia(params).subscribe(async (res: any)=>{
        console.log(res);
        this.enfermedades = res;
      });
      this.userService.getExamenesIncidencia(params).subscribe(async (res: any)=>{
        console.log(res);
        this.examenes = res;
      });
      this.userService.getCirugiasIncidencia(params).subscribe(async (res: any)=>{
        console.log(res);
        this.cirugias = res;
      });
      this.userService.getAdiccionesIncidencia(params).subscribe(async (res: any)=>{
        console.log(res);
        this.adicciones = res;
      });
      this.userService.getTratamientoIncidencia(params).subscribe(async (res: any)=>{
        console.log(res);
        this.tratamientos = res;
      });
    }

}
