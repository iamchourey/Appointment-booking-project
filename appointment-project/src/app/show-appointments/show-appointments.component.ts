import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AppointmentService } from '../services/appointment.service';
import { LoginService } from '../services/login.service';
import {  Appointment } from './appointment'

@Component({
  selector: 'app-show-appointments',
  templateUrl: './show-appointments.component.html',
  styleUrls: ['./show-appointments.component.css']
})
export class ShowAppointmentsComponent implements OnInit {

  appointments:Appointment[] | undefined;
  user=this.loginService.getUser();

  constructor(private appointService:AppointmentService,private loginService:LoginService,private router:Router,private snack:MatSnackBar) { }



  ngOnInit(): void {
    this.appointService.getAppointments().subscribe(
      (data)=>{
        this.appointments=data;
      },
      (error)=>{

      }
    )
  }

  deleteAppointment(name:any){
    this.appointService.deleteAppointment(name).subscribe(
      (data)=>{
        this.snack.open("Appointment Deleted","OK",{
          duration:3000
        })
        this.ngOnInit()
      },
      (error)=>{

      }
    )
  }
}
