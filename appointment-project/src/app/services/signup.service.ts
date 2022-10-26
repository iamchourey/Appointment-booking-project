import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {


  url= "http://localhost:8080"
  addUser(patient:any){
    console.log(patient.usernamee)
    return this.http.post(`${this.url}/user/`,patient)
  }

  constructor(private http:HttpClient) { }
}
