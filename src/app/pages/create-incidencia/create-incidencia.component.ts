import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-incidencia',
  templateUrl: './create-incidencia.component.html',
  styleUrls: ['./create-incidencia.component.css']
})
export class CreateIncidenciaComponent {

  req = {
    cui: ''
  };

  incidencia = {
    noPaciente: '',
    imc: '',
    altura: '',
    peso: '',
    noColegiado: '',
    centroMedico: ''
  };

  centrosMedicos: any;
  medicos: any;

  validacion_usuario = false;

  constructor(private userService: UserService) { 
    this.userService.getMedicos().subscribe((resp)=>{
      this.medicos = resp;
    });
    this.userService.getCentrosMedicos().subscribe((resp)=>{
      this.centrosMedicos = resp;
    });
  }

  submitForm(formulario: NgForm) {
    const params = {
      imc: this.incidencia.imc,
      altura: this.incidencia.altura,
      peso: this.incidencia.peso,
      no_paciente: this.incidencia.noPaciente,
      no_colegiado: this.incidencia.noColegiado,
      id_centro_medico: this.incidencia.centroMedico
    };

    console.log(params);
    
    this.userService.createIncidencia(params).subscribe((resp: any)=>{
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
          this.incidencia.noPaciente = resp[0].no_paciente;
          this.validacion_usuario = true;
      }else{
        alert(resp.message);
      }
    });
  }
}
