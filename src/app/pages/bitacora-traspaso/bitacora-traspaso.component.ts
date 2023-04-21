import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-bitacora-traspaso',
  templateUrl: './bitacora-traspaso.component.html',
  styleUrls: ['./bitacora-traspaso.component.css']
})
export class BitacoraTraspasoComponent {

  traspasos:any;
  fecha_hora: any;

  constructor(private userService: UserService){

      this.userService.getBitacoraTraspaso().subscribe(async (res: any)=>{
        this.traspasos = res;
      });
    }

}
