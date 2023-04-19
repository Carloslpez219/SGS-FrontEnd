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

  centrosMedicos = ['Centro Médico A', 'Centro Médico B', 'Centro Médico C'];
  especialidades = ['1', '2', '3'];
  departamentos: any;
  municipios: any;

  constructor(private userService: UserService) { 
    this.userService.getDepartamentos().subscribe((resp)=>{
      this.departamentos = resp;
    });
    const params = {
      id_departamento: this.medico.departamento
    };
    this.userService.getMunicipios(params).subscribe((resp: any)=>{
      this.municipios = resp;
    });
  }

  submitForm(formulario: NgForm) {
    const params = {
      cui: this.medico.cui,
      nombre: this.medico.nombre,
      apellidos: this.medico.apellidos,
      direccion: this.medico.direccion,
      municipio: this.medico.municipio,
      departartamento: this.medico.departamento,
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
