import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiconnectService } from '../shared/services/apiconnect.service';

@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.component.html',
  styleUrl: './course-overview.component.css'
})
export class CourseOverviewComponent implements OnInit {

  courseID?: string;
  courseData: any;

  constructor(private route: ActivatedRoute, private apiConnect: ApiconnectService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((data: any) => {
      this.courseID = data.id;
    });    

    this.apiConnect.getCourseOverview(this.courseID!).subscribe({
      next: (result: any) => {
        this.courseData = result.data;        
        this.courseData.attributes.course.updatedVideoUrl = 'https://player.vimeo.com/video/256290314?speed=0&pip=0&quality=undefined&app_id=122963&texttrack=undefined'
      }, 
      error: err=> {
        console.log(err);
      },
      complete: () => {
        console.log("Finished");
      }
    })


        
  }

}
