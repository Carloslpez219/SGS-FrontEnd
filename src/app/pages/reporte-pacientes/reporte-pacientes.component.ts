import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reporte-pacientes',
  templateUrl: './reporte-pacientes.component.html',
  styleUrls: ['./reporte-pacientes.component.css']
})
export class ReportePacientesComponent {

  pacientes: any;

  centroMedico:any;
  centrosMedicos:any;

  validacion_usuario = true;

    constructor(private userService: UserService) {
      this.userService.getCentrosMedicos().subscribe((resp)=>{
        this.centrosMedicos = resp;
      });
    }
  
    async getReporte(){
      const params = {
        id_centro_medico: this.centroMedico
      };
  
      this.userService.getTop5Pacientes(params).subscribe(async (res: any)=>{
        console.log(res);
        this.pacientes = res;
        this.validacion_usuario = false;
      });
    }
}
