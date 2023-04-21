import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-insert-inventario-materiales',
  templateUrl: './insert-inventario-materiales.component.html',
  styleUrls: ['./insert-inventario-materiales.component.css']
})
export class InsertInventarioMaterialesComponent {
  insercion = {
    centroMedico: '',
    material: '',
    disponibilidad: ''
  };

  centrosMedicos: any;
  materiales: any;

  constructor(private userService: UserService) { 
    this.userService.getMateriales().subscribe((resp)=>{
      this.materiales = resp;
    });
    this.userService.getCentrosMedicos().subscribe((resp)=>{
      this.centrosMedicos = resp;
    });
  }

  submitForm(formulario: NgForm) {
    const params = {
      id_centro_medico: this.insercion.centroMedico,
      id_material: this.insercion.material,
      disponibilidad: this.insercion.disponibilidad
    };

    console.log(params);
    
    this.userService.insertMaterial(params).subscribe((resp: any)=>{
      alert(resp.message)
      this.insercion = {
        centroMedico: '',
        material: '',
        disponibilidad: ''
      };
    });
  }
}
