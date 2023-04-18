import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-medicamento',
  templateUrl: './create-medicamento.component.html',
  styleUrls: ['./create-medicamento.component.css']
})
export class CreateMedicamentoComponent {

  descripcion = '';

  submitForm(formulario: NgForm) {
    console.log(formulario.value);
    // Aquí podrías enviar los datos del formulario al servidor
  }

}
