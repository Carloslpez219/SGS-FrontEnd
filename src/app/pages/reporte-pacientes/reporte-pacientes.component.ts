import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reporte-pacientes',
  templateUrl: './reporte-pacientes.component.html',
  styleUrls: ['./reporte-pacientes.component.css']
})
export class ReportePacientesComponent {

  pacientes: any;

  constructor(private userService: UserService){

    this.userService.getTop5Pacientes().subscribe(async (res: any)=>{
      this.pacientes = res;
    });
  }

}
