import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-medico',
  templateUrl: './create-medico.component.html',
  styleUrls: ['./create-medico.component.css']
})
export class CreateMedicoComponent {

  medico = {
    cui: '',
    nombre: '',
    apellidos: '',
    direccion: '',
    telefono: '',
    centroMedico: '',
    no_colegiado: '',
    especialidad: '',
    usuario: '',
    clave: ''
  };

  centrosMedicos = ['Centro Médico A', 'Centro Médico B', 'Centro Médico C'];
  especialidades = ['1', '2', '3'];

  submitForm(formulario: NgForm) {
    console.log(formulario.value);
    // Aquí podrías enviar los datos del formulario al servidor
  }

}
