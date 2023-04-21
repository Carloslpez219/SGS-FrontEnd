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

  getPaciente(params: any){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(params);
    console.log(body);

    return this.http.post(this.url + '/getPaciente', body,{headers});
  }

  getMedico(params: any){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(params);
    console.log(body);

    return this.http.post(this.url + '/getMedico', body,{headers});
  }

  getResumenExpediente(params: any){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(params);
    console.log(body);

    return this.http.post(this.url + '/getResumenExpediente', body,{headers});
  }

  updatePaciente(params: any){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(params);
    console.log(body);

    return this.http.put(this.url + '/updatePaciente', body,{headers});
  }

  updateMedico(params: any){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(params);
    console.log(body);

    return this.http.put(this.url + '/updateMedico', body,{headers});
  }

  getPosiblesPadres(params: any){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(params);
    console.log(body);

    return this.http.post(this.url + '/getPosiblesPadres', body,{headers});
  }

  getMedicos(){
    return this.http.get(this.url + '/getMedicos');
  }

  createIncidencia(params: any){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(params);
    console.log(body);

    return this.http.post(this.url + '/createIncidencia', body,{headers});
  }

  getBitacoraHistorial(){
    return this.http.get(this.url + '/getBitacoraHistorial');
  }

  getMateriales(){
    return this.http.get(this.url + '/getMateriales');
  }

  getMedicamentos(){
    return this.http.get(this.url + '/getMedicamentos');
  }

  insertMaterial(params: any){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(params);
    console.log(body);

    return this.http.post(this.url + '/insertMaterial', body,{headers});
  }

  insertMedicamento(params: any){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(params);
    console.log(body);

    return this.http.post(this.url + '/insertMedicamento', body,{headers});
  }

  getInventarioMateriales(params: any){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(params);
    console.log(body);

    return this.http.post(this.url + '/getInventarioMateriales', body,{headers});
  }

  getInventarioMedicamentos(params: any){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(params);
    console.log(body);

    return this.http.post(this.url + '/getInventarioMedicamentos', body,{headers});
  }

  getMedicinasPorAgotarse(params: any){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(params);
    console.log(body);

    return this.http.post(this.url + '/getMedicinasPorAgotarse', body,{headers});
  }

  getEnfermedades(){
    return this.http.get(this.url + '/getEnfermedades');
  }

  createHistorial_Enfermedad(params: any){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(params);
    console.log(body);

    return this.http.post(this.url + '/createHistorial_Enfermedad', body,{headers});
  }

  getExamenes(){
    return this.http.get(this.url + '/getExamenes');
  }

  createHistorial_Examen(params: any){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(params);
    console.log(body);

    return this.http.post(this.url + '/createHistorial_Examen', body,{headers});
  }

  getCirugias(){
    return this.http.get(this.url + '/getCirugias');
  }

  createHistorial_Cirugia(params: any){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(params);
    console.log(body);

    return this.http.post(this.url + '/createHistorial_Cirugia', body,{headers});
  }

  getAdicciones(){
    return this.http.get(this.url + '/getAdicciones');
  }

  createHistorial_Adiccion(params: any){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(params);
    console.log(body);

    return this.http.post(this.url + '/createHistorial_Adiccion', body,{headers});
  }

  createHistorial_Tratamiento(params: any){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(params);
    console.log(body);

    return this.http.post(this.url + '/createHistorial_Tratamiento', body,{headers});
  }

}
