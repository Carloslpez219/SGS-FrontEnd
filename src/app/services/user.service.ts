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

}
