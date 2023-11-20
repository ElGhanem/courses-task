import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CourseOverviewComponent } from './course-overview/course-overview.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiconnectService } from './shared/services/apiconnect.service';
import { SnavbarComponent } from './header/snavbar/snavbar.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CourseOverviewComponent,
    NotfoundComponent,
    SnavbarComponent,
    CourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiconnectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
