import { Component, OnInit } from '@angular/core';
import data from '../../../../assets/sample-data.json';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  course = data.course;

  constructor() {}

  ngOnInit(): void {}

  getCreditCount(): number {
    const { lecture, practical, tutorial, project } = this.course.credits;
    return lecture + practical + tutorial + project;
  }

}
