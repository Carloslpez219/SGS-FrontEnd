import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reporte-medicos',
  templateUrl: './reporte-medicos.component.html',
  styleUrls: ['./reporte-medicos.component.css']
})
export class ReporteMedicosComponent {

  medicos: any;

  constructor(private userService: UserService){

    this.userService.getTop10Medicos().subscribe(async (res: any)=>{
      this.medicos = res;
    });
  }

}
