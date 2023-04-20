import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-paciente',
  templateUrl: './update-paciente.component.html',
  styleUrls: ['./update-paciente.component.css']
})
export class UpdatePacienteComponent {

  req = {
    cui: ''
  };

  paciente = {
    cui: '',
    nombre: '',
    apellidos: '',
    telefono: '',
    centroMedico: '',
    estado: ''
  };

  centrosMedicos: any;
  estados: any;

  validacion_usuario = false;

  constructor(private userService: UserService) { 
    this.userService.getEstados().subscribe((resp)=>{
      this.estados = resp;
    });
    this.userService.getCentrosMedicos().subscribe((resp)=>{
      this.centrosMedicos = resp;
    });
  }

  submitForm(formulario: NgForm) {
    const params = {
      cui: this.paciente.cui,
      nombre: this.paciente.nombre,
      apellidos: this.paciente.apellidos,
      telefono: this.paciente.telefono,
      id_centro_medico: this.paciente.centroMedico,
      id_estado: this.paciente.estado
    };
    
    this.userService.updatePaciente(params).subscribe((resp: any)=>{
      alert(resp.message);
      this.validacion_usuario = false;
      this.req.cui = '';
    });
  }

  submitForm_Request(formulario: NgForm) {
    const params = {
      cui: this.req.cui
    };
    
    this.userService.getPaciente(params).subscribe((resp: any)=>{
      if(resp.message === undefined){
          this.paciente.cui = resp[0].cui;
          this.paciente.nombre = resp[0].nombre;
          this.paciente.apellidos = resp[0].apellidos;
          this.paciente.telefono = resp[0].telefono;
          this.paciente.centroMedico = resp[0].id_centro_medico;
          this.paciente.estado = resp[0].id_estado;
          this.validacion_usuario = true;
      }else{
        alert(resp.message);
      }
    });
  }
}
