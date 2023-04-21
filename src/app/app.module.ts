import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { CreatePacienteComponent } from './pages/create-paciente/create-paciente.component';
import { CreateMedicoComponent } from './pages/create-medico/create-medico.component';
import { HistorialMedicoComponent } from './pages/historial-medico/historial-medico.component';
import { UpdatePacienteComponent } from './pages/update-paciente/update-paciente.component';
import { DetalleIncidenciaComponent } from './pages/detalle-incidencia/detalle-incidencia.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { UpdateMedicoComponent } from './pages/update-medico/update-medico.component';
import { CreateIncidenciaComponent } from './pages/create-incidencia/create-incidencia.component';
import { BitacoraCardComponent } from './bitacora-card/bitacora-card.component';
import { BitacoraHistorialComponent } from './pages/bitacora-historial/bitacora-historial.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CreatePacienteComponent,
    CreateMedicoComponent,
    UpdatePacienteComponent,
    HistorialMedicoComponent,
    DetalleIncidenciaComponent,
    InfoCardComponent,
    UpdateMedicoComponent,
    HistorialMedicoComponent,
    CreateIncidenciaComponent,
    BitacoraCardComponent,
    BitacoraHistorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
