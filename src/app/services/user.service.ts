import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000';

  constructor( private http: HttpClient) { }

  login(params: any){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(params);

    return this.http.post(this.url + '/login', body,{headers});
  }

  createCentroMedico(params: any){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(params);
    console.log(body);

    return this.http.post(this.url + '/createCentroMedico', body,{headers});
  }

  createPaciente(params: any){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(params);
    console.log(body);

    return this.http.post(this.url + '/createPaciente', body,{headers});
  }

  createMedicamento(params: any){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(params);
    console.log(body);

    return this.http.post(this.url + '/createMedicamento', body,{headers});
  }

  createEspecialidad(params: any){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(params);
    console.log(body);

    return this.http.post(this.url + '/createEspecialidad', body,{headers});
  }

  createMedico(params: any){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(params);
    console.log(body);

    return this.http.post(this.url + '/createMedico', body,{headers});
  }

  getDepartamentos(){
    return this.http.get(this.url + '/getDepartamentos');
  }

  getMunicipios(params: any){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(params);
    console.log(body);

    return this.http.post(this.url + '/getMunicipios', body,{headers});
  }

  getEspecialidades(){
    return this.http.get(this.url + '/getEspecialidades');
  }

  getCentrosMedicos(){
    return this.http.get(this.url + '/getCentrosMedicos');
  }

  getEstados(){
    return this.http.get(this.url + '/getEstados');
  }

  getEnfermedadesIncidencia(params: any){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(params);
    console.log(body);

    return this.http.post(this.url + '/getEnfermedadesIncidencia', body,{headers});
  }

  getExamenesIncidencia(params: any){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(params);
    console.log(body);

    return this.http.post(this.url + '/getExamenesIncidencia', body,{headers});
  }

  getCirugiasIncidencia(params: any){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(params);
    console.log(body);

    return this.http.post(this.url + '/getCirugiasIncidencia', body,{headers});
  }

  getAdiccionesIncidencia(params: any){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(params);
    console.log(body);

    return this.http.post(this.url + '/getAdiccionesIncidencia', body,{headers});
  }

  getTratamientoIncidencia(params: any){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(params);
    console.log(body);

    return this.http.post(this.url + '/getTratamientoIncidencia', body,{headers});
  }

  updatePaciente(params: any){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(params);
    console.log(body);

    return this.http.post(this.url + '/updatePaciente', body,{headers});
  }

  getPaciente(params: any){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(params);
    console.log(body);

    return this.http.post(this.url + '/getPaciente', body,{headers});
  }

  getResumenExpediente(params: any){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(params);
    console.log(body);

    return this.http.post(this.url + '/getResumenExpediente', body,{headers});
  }

}
