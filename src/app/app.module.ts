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
import { UpdateMedicoComponent } from './pages/update-medico/update-medico.component';
import { CreateIncidenciaComponent } from './pages/create-incidencia/create-incidencia.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CreatePacienteComponent,
    CreateMedicoComponent,
    UpdatePacienteComponent,
    UpdateMedicoComponent,
    HistorialMedicoComponent,
    CreateIncidenciaComponent
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
