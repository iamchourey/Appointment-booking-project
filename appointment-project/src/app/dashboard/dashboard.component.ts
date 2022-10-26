import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Doctor } from '../doctors/doctor';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  doctors:Doctor[] | undefined

  public appointment={
    name:'',
    contact:'',
    doctorName:'',
    date:'',
    time:'',
    symptoms:''
  }

  constructor(private appointmentService:AppointmentService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  saveAppointment(){

    if(this.appointment.name=='' || this.appointment.name==null){
      this.snack.open("Please Enter your name",'OK',{
        duration:3000
      })
      return
    }
    if(this.appointment.contact=='' || this.appointment.contact==null){
      this.snack.open("Please Enter your contack",'OK',{
        duration:3000
      })
      return
    }
    if(this.appointment.doctorName=='' || this.appointment.doctorName==null){
      this.snack.open("Please Enter doctor name",'OK',{
        duration:3000
      })
      return
    }
    if(this.appointment.date=='' || this.appointment.date==null){
      this.snack.open("Please select date",'OK',{
        duration:3000
      })
      return
    }
    if(this.appointment.time=='' || this.appointment.time==null){
      this.snack.open("Please select time",'OK',{
        duration:3000
      })
      return
    }
    if(this.appointment.symptoms=='' || this.appointment.symptoms==null){
      this.snack.open("Please enter symptoms",'OK',{
        duration:3000
      })
      return
    }

    console.log(this.appointment)

    this.appointmentService.addAppointment(this.appointment).subscribe(
      (data)=>{
        console.log(data)
        this.snack.open("Appointment Scheduled","OK",{
          duration:3000
        })
      },
      (error)=>{
        this.snack.open("Something went wrong","OK",{
          duration:3000
        })
        console.log(error)
      }
    )
  }

}
