import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-insert-cirugia',
  templateUrl: './insert-cirugia.component.html',
  styleUrls: ['./insert-cirugia.component.css']
})
export class InsertCirugiaComponent {
  cirugia:any;
  cirugias:any;

  constructor(private userService: UserService) {
    this.userService.getCirugias().subscribe((resp)=>{
      this.cirugias = resp;
    });
  }

  async insertCirugia(){
    const incidencia = sessionStorage.getItem('incidencia'); 
      const params = {
        id_incidencia: incidencia,
        id_cirugia: this.cirugia
      };

    this.userService.createHistorial_Cirugia(params).subscribe(async (res: any)=>{
      alert(res.message);
      this.cirugia=null;
    });
  }
}
