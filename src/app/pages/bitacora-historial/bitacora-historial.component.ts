import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-bitacora-historial',
  templateUrl: './bitacora-historial.component.html',
  styleUrls: ['./bitacora-historial.component.css']
})
export class BitacoraHistorialComponent {

  bitacoras:any;

  constructor(private userService: UserService){

      this.userService.getBitacoraHistorial().subscribe(async (res: any)=>{
        this.bitacoras = res;
      });
    }

}
