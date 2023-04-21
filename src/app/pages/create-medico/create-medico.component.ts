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
    departamento: '',
    municipio: '',
    direccion: '',
    telefono: '',
    centroMedico: '',
    no_colegiado: '',
    especialidad: '',
    usuario: '',
    clave: ''
  };

  centrosMedicos: any;
  especialidades: any;
  departamentos: any;
  municipios: any;

  constructor(private userService: UserService) { 
    this.userService.getDepartamentos().subscribe((resp)=>{
      this.departamentos = resp;
    });
    this.userService.getEspecialidades().subscribe((resp)=>{
      this.especialidades = resp;
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
      direccion: this.medico.direccion,
      id_municipio: this.medico.municipio,
      telefono: this.medico.telefono,
      id_centro_medico: this.medico.centroMedico,
      no_colegiado: this.medico.no_colegiado,
      id_especialidad: this.medico.especialidad,
      usuario: this.medico.usuario,
      clave: this.medico.clave
    };

    console.log(params);
    
    this.userService.createMedico(params).subscribe((resp: any)=>{
      alert(resp);
      this.medico = {
        cui: '',
        nombre: '',
        apellidos: '',
        departamento: '',
        municipio: '',
        direccion: '',
        telefono: '',
        centroMedico: '',
        no_colegiado: '',
        especialidad: '',
        usuario: '',
        clave: ''
      };
    });
  }

  getMunicipios(event:any){
    console.log(event)
    const params = {
      id_departamento: this.medico.departamento
    };
    this.userService.getMunicipios(params).subscribe((resp: any)=>{
      this.municipios = resp;
    });
  }

}
