import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../doctors/doctor';

@Injectable({
  providedIn: 'root'
})
export class DocterListService {

  url="http://localhost:8081";

  getDoctors(): Observable<Doctor[]>{
    return this.http.get<Doctor[]>(`${this.url}/doctors-list`);
  }

  constructor(private http:HttpClient) { }
}
