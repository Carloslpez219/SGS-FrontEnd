import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-historial-medico',
  templateUrl: './historial-medico.component.html',
  styleUrls: ['./historial-medico.component.css']
})
export class HistorialMedicoComponent implements OnInit {

  registros: any;
  cui: any;
  paciente: any;
  paso1 = true;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // Simulación de datos de registros del historial médico
    this.registros = [
      {
        fechaConsulta: '2022-01-01',
        horaConsulta: '10:00',
        imc: 25,
        altura: 170,
        peso: 70,
        medicoTratante: 'Dr. Juan Pérez',
        especialidadMedico: 'Cardiología',
        centroMedico: 'Hospital ABC',
        evolucionResultado: 'Mejoría en los síntomas del paciente después del tratamiento.'
      },
      {
        fechaConsulta: '2022-02-15',
        horaConsulta: '15:30',
        imc: 23,
        altura: 160,
        peso: 65,
        medicoTratante: 'Dra. Ana Gómez',
        especialidadMedico: 'Dermatología',
        centroMedico: 'Clínica XYZ',
        evolucionResultado: 'El paciente muestra signos de recuperación en la piel después del tratamiento.'
      },
      // Agregar más registros del historial médico aquí
    ];
  }

  async getPaciente(){
    const params = {
      cui: this.cui
    };

    this.userService.getPaciente(params).subscribe(async (res: any)=>{
      this.paciente = res;
      this.getResumenExpediente();
    });
  }

  async getResumenExpediente(){
    const params = {
      no_paciente: this.paciente.no_paciente
    };

    this.userService.getResumenExpediente(params).subscribe(async (res: any)=>{
      this.registros = res;
      this.paso1 = false;
    });
  }

}
