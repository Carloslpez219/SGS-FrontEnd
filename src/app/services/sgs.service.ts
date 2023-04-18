import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SGSService {

  url = 'http://localhost:3000/';

  constructor( private http: HttpClient) { }

  create(params: any){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(params);
    console.log(body);

    return this.http.post(this.url + '/login', body,{headers});
  }

}
