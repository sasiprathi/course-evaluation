import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './course-evaluation/sidebar/sidebar.component';
import { CourseEvaluationComponent } from './course-evaluation/course-evaluation.component';
import { AssessmentProgressComponent } from './course-evaluation/assessment-progress/assessment-progress.component';
import { StudentAttendanceComponent } from './course-evaluation/student-attendance/student-attendance.component';


@NgModule({
  declarations: [
    SidebarComponent,
    CourseEvaluationComponent,
    AssessmentProgressComponent,
    StudentAttendanceComponent
  ],
  exports: [
    CourseEvaluationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeatureModule { }
