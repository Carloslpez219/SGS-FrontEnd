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
    departamento: '',
    municipio: '',
    direccion: '',
    telefono: '',
    centroMedico: '',
    estado: ''
  };

  centrosMedicos: any;
  estados: any;
  departamentos: any;
  municipios: any;

  constructor(private userService: UserService) { 
    this.userService.getDepartamentos().subscribe((resp)=>{
      this.departamentos = resp;
    });
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
      direccion: this.paciente.direccion,
      id_municipio: this.paciente.municipio,
      telefono: this.paciente.telefono,
      id_centro_medico: this.paciente.centroMedico,
      id_estado: this.paciente.estado
    };
    
    this.userService.createPaciente(params).subscribe((resp: any)=>{
      console.log(resp);
    });
  }

  getMunicipios(event:any){
    console.log(event)
    const params = {
      id_departamento: this.paciente.departamento
    };
    this.userService.getMunicipios(params).subscribe((resp: any)=>{
      this.municipios = resp;
    });
  }
}
