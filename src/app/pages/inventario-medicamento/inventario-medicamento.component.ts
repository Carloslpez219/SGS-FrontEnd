import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-inventario-medicamento',
  templateUrl: './inventario-medicamento.component.html',
  styleUrls: ['./inventario-medicamento.component.css']
})
export class InventarioMedicamentoComponent {
  centroMedico:any;
  centrosMedicos:any;

  registros:any;
  medicinas:any;

  validacion_usuario = true;

  constructor(private userService: UserService) {
    this.userService.getCentrosMedicos().subscribe((resp)=>{
      this.centrosMedicos = resp;
    });
  }

  async getInventario(){
    const params = {
      id_centro_medico: this.centroMedico
    };

    this.userService.getInventarioMedicamentos(params).subscribe(async (res: any)=>{
      console.log(res);
      this.registros = res;
    });

    this.userService.getMedicinasPorAgotarse(params).subscribe(async (res: any)=>{
      console.log(res);
      this.medicinas = res;
      this.validacion_usuario = false;
    });
  }
}
