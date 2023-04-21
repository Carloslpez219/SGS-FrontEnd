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
import { InsertInventarioMedicamentoComponent } from './pages/insert-inventario-medicamento/insert-inventario-medicamento.component';
import { InventarioMedicamentoComponent } from './pages/inventario-medicamento/inventario-medicamento.component';
import { InsertInventarioMaterialesComponent } from './pages/insert-inventario-materiales/insert-inventario-materiales.component';
import { DetalleIncidenciaComponent } from './pages/detalle-incidencia/detalle-incidencia.component';
import { InventarioMaterialesComponent } from './pages/inventario-materiales/inventario-materiales.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'createPaciente', component: CreatePacienteComponent },
  { path: 'createMedico', component: CreateMedicoComponent },
  { path: 'updatePaciente', component: UpdatePacienteComponent },
  { path: 'updateMedico', component: UpdateMedicoComponent },
  { path: 'historial-medico', component: HistorialMedicoComponent },
  { path: 'createIncidencia', component: CreateIncidenciaComponent },
  { path: 'insertInventarioMedicamento', component: InsertInventarioMedicamentoComponent },
  { path: 'inventarioMedicamento', component: InventarioMedicamentoComponent },
  { path: 'insertInventarioMaterial', component: InsertInventarioMaterialesComponent },
  { path: 'detalleIncidencia', component: DetalleIncidenciaComponent },
  { path: 'inventarioMateriales', component: InventarioMaterialesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
