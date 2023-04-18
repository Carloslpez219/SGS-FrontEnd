import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-centro-medico',
  templateUrl: './create-centro-medico.component.html',
  styleUrls: ['./create-centro-medico.component.css']
})
export class CreateCentroMedicoComponent {

  nombre = '';
  id = '';

  constructor(private userService: UserService) { }

  submitForm(formulario: NgForm) {
    const params = {
      nombre: this.nombre,
      id: this.id
    };
    
    this.userService.createCentroMedico(params).subscribe((resp: any)=>{
      console.log(resp);
    });
  }

}
