import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reporte-muertes',
  templateUrl: './reporte-muertes.component.html',
  styleUrls: ['./reporte-muertes.component.css']
})
export class ReporteMuertesComponent {

  enfermedades: any;

  constructor(private userService: UserService){

    this.userService.getBitacoraTraspaso().subscribe(async (res: any)=>{
      this.enfermedades = res;
    });
  }

}
