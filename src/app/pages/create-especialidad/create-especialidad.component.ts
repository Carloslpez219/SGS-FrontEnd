import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-especialidad',
  templateUrl: './create-especialidad.component.html',
  styleUrls: ['./create-especialidad.component.css']
})
export class CreateEspecialidadComponent {

  nombre = '';

  constructor(private userService: UserService) { }

  submitForm(formulario: NgForm) {
    const params = {
      nombre: this.nombre
    };
    
    this.userService.createEspecialidad(params).subscribe((resp: any)=>{
      console.log(resp);
    });
  }

}
