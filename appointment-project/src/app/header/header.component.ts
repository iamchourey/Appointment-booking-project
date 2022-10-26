import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../services/appointment.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn=false

  constructor(private router: Router,private loginservice:LoginService,private appointmentService:AppointmentService) { }

  ngOnInit(): void {
    this.loggedIn=this.loginservice.isLoggedIn()
  }

  logout(){
    this.loggedIn=false;
    this.loginservice.logOut();
  }

  home(){
    if(this.loggedIn){
      this.router.navigate(['/dashboard'])
    }
    else{
      this.router.navigate(['/'])
    }
  }

  showAppointments(){
    this.appointmentService.getAppointments().subscribe(
      (data)=>{
        
      },
      (error)=>{
        console.log("Something went wrong!!")
      }
    )
  }
}
