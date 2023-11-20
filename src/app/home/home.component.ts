import { Component, OnInit } from '@angular/core';
import { ApiconnectService } from '../shared/services/apiconnect.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit{

  courses: any;

  constructor(private apiConnect: ApiconnectService, private router: Router) {

  }

  ngOnInit(): void {
    this.apiConnect.getListOfCourses().subscribe({
      next: (result: any) => {
        this.courses = result.data;
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        console.log('Finished');
      }
    })
  }

  showOverview(course: any) {
    this.router.navigate(['course',course.id])
  }

}
