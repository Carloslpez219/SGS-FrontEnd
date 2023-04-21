import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-insert-enfermedad',
  templateUrl: './insert-enfermedad.component.html',
  styleUrls: ['./insert-enfermedad.component.css']
})
export class InsertEnfermedadComponent {
  enfermedad:any;
  enfermedades:any;

  constructor(private userService: UserService) {
    this.userService.getEnfermedades().subscribe((resp)=>{
      this.enfermedades = resp;
    });
  }

  async insertEnfermedad(){
    const incidencia = sessionStorage.getItem('incidencia'); 
      const params = {
        id_incidencia: incidencia,
        id_enfermedad: this.enfermedad
      };

    this.userService.createHistorial_Enfermedad(params).subscribe(async (res: any)=>{
      alert(res.message);
      this.enfermedad=null;
    });
  }
}
