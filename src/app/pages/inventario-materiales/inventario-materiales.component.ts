import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-inventario-materiales',
  templateUrl: './inventario-materiales.component.html',
  styleUrls: ['./inventario-materiales.component.css']
})
export class InventarioMaterialesComponent {
  centroMedico:any;
  centrosMedicos:any;

  registros:any;
  materiales:any;

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

    this.userService.getInventarioMateriales(params).subscribe(async (res: any)=>{
      console.log(res);
      this.registros = res;
      this.validacion_usuario = false;
    });
  }
}
