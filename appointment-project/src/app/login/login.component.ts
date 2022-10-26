import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={
    username: '',
    password: ''
  }

  constructor(private loginService:LoginService,private router:Router,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit(){

    if((this.credentials.username!='' && this.credentials.password!='') && (this.credentials.username!=null && this.credentials.password!=null)){
      this.loginService.generateToken(this.credentials).subscribe(
        (response:any)=>{
          this.loginService.loginUser(response.token)
          this.loginService.getCurrentUser().subscribe(
            (user)=>{
              console.log(user);
              this.loginService.setUser(user);

              if(this.loginService.getUserRole()=="ADMIN"){
                this.router.navigate(['/admin-dashboard']);
              }
              else if(this.loginService.getUserRole()=="NORMAL"){
                this.router.navigate(['/dashboard']);
              }
              else{
                this.loginService.logOut();
              }
            }
          )
        },
        (error)=>{
          this.snack.open("error",'OK',{
            duration:3000
          })
        }
      )
    }
    else{
      this.snack.open("Fields are empty",'OK',{
        duration:3000
      })
    }
  }

}
