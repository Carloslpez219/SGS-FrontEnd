import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-centro-medico',
  templateUrl: './create-centro-medico.component.html',
  styleUrls: ['./create-centro-medico.component.css']
})
export class CreateCentroMedicoComponent {

  nombre = '';
  id = '';

  submitForm(formulario: NgForm) {
    console.log(formulario.value);
    // Aquí podrías enviar los datos del formulario al servidor
  }

}
