import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public patient={
    username: '',
    email: '',
    name: '',
    phone: '',
    password: ''
  }

  constructor(private signupservice:SignupService,private router:Router,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  signUp(){
    console.log(this.patient.username)
    if(this.patient.username=='' || this.patient.username==null){
      this.snack.open("Please Enter Username",'OK',{
        duration:3000
      })
      return
    }
    if(this.patient.name=='' || this.patient.name==null){
      this.snack.open("Please Enter Name",'OK',{
        duration:3000
      })
      return
    }
    if(this.patient.email=='' || this.patient.email==null){
      this.snack.open("Please Enter E-mail",'OK',{
        duration:3000
      })
      return
    }
    if(this.patient.phone=='' || this.patient.phone==null){
      this.snack.open("Please Enter Phone Number",'OK',{
        duration:3000
      })
      return
    }
    if(this.patient.password=='' || this.patient.password==null){
      this.snack.open("Please Enter Password",'OK',{
        duration:3000
      })
      return
    }

    this.signupservice.addUser(this.patient).subscribe(
      (data)=>{
        this.snack.open("SUCCESS!!",'',{
          duration:3000
        })
        this.router.navigate(['/login'])
      },
      (error)=>{
        this.snack.open("Something Went Wrong",'OK',{
          duration:3000
        })
      }
    )
  }

}
