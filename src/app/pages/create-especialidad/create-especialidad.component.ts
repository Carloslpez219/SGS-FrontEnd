import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-especialidad',
  templateUrl: './create-especialidad.component.html',
  styleUrls: ['./create-especialidad.component.css']
})
export class CreateEspecialidadComponent {

  nombre = '';

  submitForm(formulario: NgForm) {
    console.log(formulario.value);
    // Aquí podrías enviar los datos del formulario al servidor
  }

}
