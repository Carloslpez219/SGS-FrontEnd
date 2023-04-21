import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-insert-tratamiento',
  templateUrl: './insert-tratamiento.component.html',
  styleUrls: ['./insert-tratamiento.component.css']
})
export class InsertTratamientoComponent {
  medicamento:any;
  medicamentos:any;
  dosis:any;

  constructor(private userService: UserService) {
    this.userService.getMedicamentos().subscribe((resp)=>{
      this.medicamentos = resp;
    });
  }

  async insertTratamiento(){
    const incidencia = sessionStorage.getItem('incidencia'); 
      const params = {
        id_incidencia: incidencia,
        id_medicamento: this.medicamento,
        dosis: this.dosis
      };

    this.userService.createHistorial_Tratamiento(params).subscribe(async (res: any)=>{
      alert(res.message);
      this.medicamento=null;
      this.dosis=null;
    });
  }
}
