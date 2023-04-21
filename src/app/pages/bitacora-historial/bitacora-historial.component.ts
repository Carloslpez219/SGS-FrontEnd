import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-bitacora-historial',
  templateUrl: './bitacora-historial.component.html',
  styleUrls: ['./bitacora-historial.component.css']
})
export class BitacoraHistorialComponent {

  bitacoras:any;
  fecha_hora: any;

  constructor(private userService: UserService){

      this.userService.getBitacoraHistorial().subscribe(async (res: any)=>{
        const fechaDB = res.fecha_h;
        const fecha = new Date(fechaDB);
        const año = fecha.getFullYear();
        const mes = fecha.getMonth() + 1;
        const dia = fecha.getDate();
        const hora = fecha.getHours();
        const minuto = fecha.getMinutes();
        const segundo = fecha.getSeconds();
        const agregarCero = (numero: number) => {
          return numero < 10 ? '0' + numero : numero;
        };
        this.fecha_hora = `${agregarCero(dia)}/${agregarCero(mes)}/${año} - ${agregarCero(hora)}:${agregarCero(minuto)}:${agregarCero(segundo)}`;
        this.bitacoras = res;
      });
    }

}
