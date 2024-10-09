import { Component, OnInit } from '@angular/core';
import data from '../../../../assets/sample-data.json';
import {Chart, registerables} from "chart.js";

@Component({
  selector: 'app-student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrls: ['./student-attendance.component.scss']
})
export class StudentAttendanceComponent implements OnInit {

  attendanceLabels:string[] = data.attendance.map(a => a.week);
  attendanceDataList:number[] = data.attendance.map(a => a.attendance);

  constructor() {}

  ngOnInit(): void {
    Chart.register(...registerables);

    const ctx = document.getElementById('attendanceChart') as HTMLCanvasElement;
    ctx.height = 250;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.attendanceLabels,
        datasets: [
          {
            label: 'Attendance',
            data: this.attendanceDataList,
            fill: false,
            borderColor: '#6a1b9a',
            tension: 0.1,
            pointBackgroundColor: '#000',
            pointRadius: 4
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false // Hide the legend
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { stepSize: 25 },
            display: true,
            title: {
              display: true,
              text: 'Attendance'
            },
            grid: {
              display: false // Hide y-axis grid lines
            }
          },
          x: {
            beginAtZero: false,
            display: true,
            title: {
              display: true,
              text: 'Weeks'
            }
          },
        },
      },
    });
  }

}
