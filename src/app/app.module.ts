import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { CreateCentroMedicoComponent } from './pages/create-centro-medico/create-centro-medico.component';
import { CreatePacienteComponent } from './pages/create-paciente/create-paciente.component';
import { CreateMedicoComponent } from './pages/create-medico/create-medico.component';
import { CreateEspecialidadComponent } from './pages/create-especialidad/create-especialidad.component';
import { CreateMedicamentoComponent } from './pages/create-medicamento/create-medicamento.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    CreateCentroMedicoComponent,
    CreatePacienteComponent,
    CreateMedicoComponent,
    CreateEspecialidadComponent,
    CreateMedicamentoComponent
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
