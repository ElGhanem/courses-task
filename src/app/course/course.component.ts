import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'course-temp',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})


export class CourseComponent implements OnInit{
  
  @Input() courseData: any;

  ngOnInit(): void {
  }
  
}
