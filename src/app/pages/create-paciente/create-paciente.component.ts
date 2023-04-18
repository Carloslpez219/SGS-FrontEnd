import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-paciente',
  templateUrl: './create-paciente.component.html',
  styleUrls: ['./create-paciente.component.css']
})
export class CreatePacienteComponent {

  paciente = {
    cui: '',
    nombre: '',
    apellidos: '',
    direccion: '',
    telefono: '',
    centroMedico: ''
  };

  centrosMedicos = ['Centro Médico A', 'Centro Médico B', 'Centro Médico C'];

  submitForm(formulario: NgForm) {
    console.log(formulario.value);
    // Aquí podrías enviar los datos del formulario al servidor
  }
}
