import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-historial-medico',
  templateUrl: './historial-medico.component.html',
  styleUrls: ['./historial-medico.component.css']
})
export class HistorialMedicoComponent implements OnInit {

  registros: any;
  cui: any;
  paciente: any;
  validacion_usuario = true;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  async getPaciente(){
    const params = {
      cui: this.cui
    };

    this.userService.getPaciente(params).subscribe(async (res: any)=>{
      if(res.message === undefined){
        this.paciente = res[0];
        this.getResumenExpediente();
      }else{
        alert(res.message);
      }
    });
  }

  async getResumenExpediente(){
    const params = {
      no_paciente: this.paciente.no_paciente
    };

    this.userService.getResumenExpediente(params).subscribe(async (res: any)=>{
      console.log(res);
      this.registros = res;
      this.validacion_usuario = false;
    });
  }

  guardarIncidencia(registro: any){
    sessionStorage.setItem('incidencia', registro.id_incidencia);
  }

}
