import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocterListService } from '../services/docter-list.service';
import { Doctor } from './doctor';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  doctors!: Doctor[];

  constructor(private router: Router,private doctorService:DocterListService) { }

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe(
      (data)=>{
        console.log(data)
        this.doctors=data;
      },
      (error)=>{

      }
    )
  }

}
