import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8080"

  generateToken(credentials:any){
    return this.http.post(`${this.url}/generate-token`,credentials)
  }

  public getCurrentUser(){
    return this.http.get(`${this.url}/current-user`)
  }
  
  loginUser(token: string){
    localStorage.setItem("token",token)
    return true;
  }

  isLoggedIn(){
    let token=localStorage.getItem("token")

    if(token==undefined || token==='' || token==null) return false;
    else return true;
  }

  logOut(){
    localStorage.removeItem("token");
    return true;
  }

  getToken(){
    return localStorage.getItem("token")
  }

  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  public getUser(){
    let userStr = localStorage.getItem('user');
    if(userStr!=null) return JSON.parse(userStr);
    else{
      this.logOut();
      return null;
    }
  }

  public getUserRole(){
    let user=this.getUser();
    return user.authorities[0].authority;
  }

  constructor(private http:HttpClient) { }
}
