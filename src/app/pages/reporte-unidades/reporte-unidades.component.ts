import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reporte-unidades',
  templateUrl: './reporte-unidades.component.html',
  styleUrls: ['./reporte-unidades.component.css']
})
export class ReporteUnidadesComponent {

  unidades: any;

  constructor(private userService: UserService){

    this.userService.getTop3Unidades().subscribe(async (res: any)=>{
      this.unidades = res;
    });
  }

}
