import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMedicoComponent } from './pages/create-medico/create-medico.component';
import { CreatePacienteComponent } from './pages/create-paciente/create-paciente.component';
import { HistorialMedicoComponent } from './pages/historial-medico/historial-medico.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UpdatePacienteComponent } from './pages/update-paciente/update-paciente.component';
import { UpdateMedicoComponent } from './pages/update-medico/update-medico.component';
import { CreateIncidenciaComponent } from './pages/create-incidencia/create-incidencia.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'createPaciente', component: CreatePacienteComponent },
  { path: 'createMedico', component: CreateMedicoComponent },
  { path: 'updatePaciente', component: UpdatePacienteComponent },
  { path: 'updateMedico', component: UpdateMedicoComponent },
  { path: 'historial-medico', component: HistorialMedicoComponent },
  { path: 'createIncidencia', component: CreateIncidenciaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
