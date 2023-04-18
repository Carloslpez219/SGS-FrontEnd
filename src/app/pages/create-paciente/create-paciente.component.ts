import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

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
    centroMedico: '',
    estado: ''
  };

  centrosMedicos = ['Centro Médico A', 'Centro Médico B', 'Centro Médico C'];
  estados = ['1', '2', '3'];

  constructor(private userService: UserService) { }

  submitForm(formulario: NgForm) {
    const params = {
      cui: this.paciente.cui,
      nombre: this.paciente.nombre,
      apellidos: this.paciente.apellidos,
      direccion: this.paciente.direccion,
      telefono: this.paciente.telefono,
      id_centro_medico: this.paciente.centroMedico,
      id_estado: this.paciente.estado
    };
    
    this.userService.createMedico(params).subscribe((resp: any)=>{
      console.log(resp);
    });
  }
}
