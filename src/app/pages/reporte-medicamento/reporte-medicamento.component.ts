import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reporte-medicamento',
  templateUrl: './reporte-medicamento.component.html',
  styleUrls: ['./reporte-medicamento.component.css']
})
export class ReporteMedicamentoComponent {
  centroMedico:any;
  centrosMedicos:any;

  medicinas:any;

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

    this.userService.getMedicinasPorAgotarse(params).subscribe(async (res: any)=>{
      console.log(res);
      this.medicinas = res;
      this.validacion_usuario = false;
    });
  }
}
