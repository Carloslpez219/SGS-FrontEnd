import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-insert-examen',
  templateUrl: './insert-examen.component.html',
  styleUrls: ['./insert-examen.component.css']
})
export class InsertExamenComponent {
  examen:any;
  examenes:any;

  constructor(private userService: UserService) {
    this.userService.getExamenes().subscribe((resp)=>{
      this.examenes = resp;
    });
  }

  async insertExamen(){
    const incidencia = sessionStorage.getItem('incidencia'); 
      const params = {
        id_incidencia: incidencia,
        id_examen: this.examen
      };

    this.userService.createHistorial_Examen(params).subscribe(async (res: any)=>{
      alert(res.message);
      this.examen=null;
    });
  }
}
