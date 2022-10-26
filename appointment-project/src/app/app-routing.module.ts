import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { ShowAppointmentsComponent } from './show-appointments/show-appointments.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'',component:HomeComponent},
  {path:'doctors',component:DoctorsComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path: 'admin-dashboard',component:AdminDashboardComponent,canActivate:[AuthGuard]},
  {path:'show-appointments',component:ShowAppointmentsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
