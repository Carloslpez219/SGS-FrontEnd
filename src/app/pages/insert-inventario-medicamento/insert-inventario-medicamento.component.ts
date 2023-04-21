import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-insert-inventario-medicamento',
  templateUrl: './insert-inventario-medicamento.component.html',
  styleUrls: ['./insert-inventario-medicamento.component.css']
})
export class InsertInventarioMedicamentoComponent {

  insercion = {
    centroMedico: '',
    medicamento: '',
    disponibilidad: '',
    fechaCaducidad: '',
    capacidadMaxima: ''
  };

  centrosMedicos: any;
  medicamentos: any;

  constructor(private userService: UserService) { 
    this.userService.getMedicamentos().subscribe((resp)=>{
      this.medicamentos = resp;
    });
    this.userService.getCentrosMedicos().subscribe((resp)=>{
      this.centrosMedicos = resp;
    });
  }

  submitForm(formulario: NgForm) {
    const params = {
      id_centro_medico: this.insercion.centroMedico,
      id_medicamento: this.insercion.medicamento,
      disponibilidad: this.insercion.disponibilidad,
      fecha_caducidad: this.insercion.fechaCaducidad,
      capacidad_maxima: this.insercion.capacidadMaxima
    };

    console.log(params);
    
    this.userService.insertMedicamento(params).subscribe((resp: any)=>{
      alert(resp.message)
      this.insercion = {
        centroMedico: '',
        medicamento: '',
        disponibilidad: '',
        fechaCaducidad: '',
        capacidadMaxima: ''
      };
    });
  }
}
