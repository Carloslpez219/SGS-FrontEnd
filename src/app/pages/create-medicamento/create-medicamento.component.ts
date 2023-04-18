import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-medicamento',
  templateUrl: './create-medicamento.component.html',
  styleUrls: ['./create-medicamento.component.css']
})
export class CreateMedicamentoComponent {

  descripcion = '';

  constructor(private userService: UserService) { }

  submitForm(formulario: NgForm) {
    const params = {
      descripcion: this.descripcion
    };
    
    this.userService.createMedico(params).subscribe((resp: any)=>{
      console.log(resp);
    });
  }

}
