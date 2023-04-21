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
import { InsertEnfermedadComponent } from './pages/insert-enfermedad/insert-enfermedad.component';
import { InsertExamenComponent } from './pages/insert-examen/insert-examen.component';
import { InsertCirugiaComponent } from './pages/insert-cirugia/insert-cirugia.component';
import { InsertAdiccionComponent } from './pages/insert-adiccion/insert-adiccion.component';
import { InsertTratamientoComponent } from './pages/insert-tratamiento/insert-tratamiento.component';
import { BitacoraHistorialComponent } from './pages/bitacora-historial/bitacora-historial.component';
import { BitacoraTraspasoComponent } from './pages/bitacora-traspaso/bitacora-traspaso.component';
import { ReporteMuertesComponent } from './pages/reporte-muertes/reporte-muertes.component';

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
  { path: 'inventarioMateriales', component: InventarioMaterialesComponent },
  { path: 'agregarEnfermedad', component: InsertEnfermedadComponent },
  { path: 'agregarExamen', component: InsertExamenComponent },
  { path: 'agregarCirugia', component: InsertCirugiaComponent },
  { path: 'agregarAdiccion', component: InsertAdiccionComponent },
  { path: 'agregarTratamiento', component: InsertTratamientoComponent },
  { path: 'bitacoraHistorial', component: BitacoraHistorialComponent },
  { path: 'bitacoraTraspaso', component: BitacoraTraspasoComponent },
  { path: 'reporteMuertes', component: ReporteMuertesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
