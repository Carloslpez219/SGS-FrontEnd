import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-medico',
  templateUrl: './update-medico.component.html',
  styleUrls: ['./update-medico.component.css']
})
export class UpdateMedicoComponent {

  req = {
    cui: ''
  };

  medico = {
    cui: '',
    colegiado: '',
    nombre: '',
    apellidos: '',
    telefono: '',
    centroMedico: '',
    idEspecialidad: ''
  };

  centrosMedicos: any;
  especialidades: any;

  validacion_usuario = false;

  constructor(private userService: UserService) { 
    this.userService.getEspecialidades().subscribe((resp)=>{
      this.especialidades = resp;
      console.log(this.especialidades);
    });
    this.userService.getCentrosMedicos().subscribe((resp)=>{
      this.centrosMedicos = resp;
    });
  }

  submitForm(formulario: NgForm) {
    const params = {
      cui: this.medico.cui,
      nombre: this.medico.nombre,
      apellidos: this.medico.apellidos,
      telefono: this.medico.telefono,
      id_centro_medico: this.medico.centroMedico,
      id_especialidad: this.medico.idEspecialidad
    };
    
    this.userService.updateMedico(params).subscribe((resp: any)=>{
      alert(resp.message);
      this.validacion_usuario = false;
      this.req.cui = '';
    });
  }

  submitForm_Request(formulario: NgForm) {
    const params = {
      cui: this.req.cui
    };
    
    this.userService.getMedico(params).subscribe((resp: any)=>{
      if(resp.message === undefined){
          this.medico.cui = resp[0].cui;
          this.medico.colegiado = resp[0].no_colegiado
          this.medico.nombre = resp[0].nombre;
          this.medico.apellidos = resp[0].apellidos;
          this.medico.telefono = resp[0].telefono;
          this.medico.centroMedico = resp[0].id_centro_medico;
          this.medico.idEspecialidad = resp[0].id_especialidad;
          this.validacion_usuario = true;
      }else{
        alert(resp.message);
      }
    });
  }
}
