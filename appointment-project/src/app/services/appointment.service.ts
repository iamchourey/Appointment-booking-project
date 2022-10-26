import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../show-appointments/appointment';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  url="http://localhost:8082"

  addAppointment(appointment:any){
    return this.http.post(`${this.url}/appointment/`,appointment)
  }

  getAppointments(): Observable<Appointment[]>{
    return this.http.get<Appointment[]>(`${this.url}/appointment/get`);
  }

  deleteAppointment(name:any): Observable<Object>{
    return this.http.delete(`${this.url}/appointment/delete/${name}`);
  }

  constructor(private http:HttpClient,private loginService:LoginService) { }
}
