import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-insert-adiccion',
  templateUrl: './insert-adiccion.component.html',
  styleUrls: ['./insert-adiccion.component.css']
})
export class InsertAdiccionComponent {
  adiccion:any;
  adicciones:any;

  constructor(private userService: UserService) {
    this.userService.getAdicciones().subscribe((resp)=>{
      this.adicciones = resp;
    });
  }

  async insertAdiccion(){
    const incidencia = sessionStorage.getItem('incidencia'); 
      const params = {
        id_incidencia: incidencia,
        id_adiccion: this.adiccion
      };

    console.log(params);

    this.userService.createHistorial_Adiccion(params).subscribe(async (res: any)=>{
      alert(res.message);
      this.adiccion=null;
    });
  }
}
