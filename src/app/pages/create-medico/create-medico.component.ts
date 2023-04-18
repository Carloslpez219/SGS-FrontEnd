import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

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

  constructor(private userService: UserService) { }

  submitForm(formulario: NgForm) {
    const params = {
      cui: this.medico.cui,
      nombre: this.medico.nombre,
      apellidos: this.medico.apellidos,
      direccion: this.medico.direccion,
      telefono: this.medico.telefono,
      id_centro_medico: this.medico.centroMedico,
      no_colegiado: this.medico.no_colegiado,
      id_especialidad: this.medico.especialidad,
      usuario: this.medico.usuario,
      clave: this.medico.clave
    };
    
    this.userService.createMedico(params).subscribe((resp: any)=>{
      console.log(resp);
    });
  }

}
