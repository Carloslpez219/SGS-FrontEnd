import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCentroMedicoComponent } from './pages/create-centro-medico/create-centro-medico.component';
import { CreateEspecialidadComponent } from './pages/create-especialidad/create-especialidad.component';
import { CreateMedicamentoComponent } from './pages/create-medicamento/create-medicamento.component';
import { CreateMedicoComponent } from './pages/create-medico/create-medico.component';
import { CreatePacienteComponent } from './pages/create-paciente/create-paciente.component';
import { HistorialMedicoComponent } from './pages/historial-medico/historial-medico.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'createPaciente', component: CreatePacienteComponent },
  { path: 'createMedico', component: CreateMedicoComponent },
  { path: 'createEspecialidad', component: CreateEspecialidadComponent },
  { path: 'createCentroMedico', component: CreateCentroMedicoComponent },
  { path: 'createMedicamento', component: CreateMedicamentoComponent },
  { path: 'historial-medico', component: HistorialMedicoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
