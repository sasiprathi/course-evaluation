import { Component, OnInit } from '@angular/core';
import data from '../../../../assets/sample-data.json';
import {Chart, registerables} from "chart.js";

@Component({
  selector: 'app-assessment-progress',
  templateUrl: './assessment-progress.component.html',
  styleUrls: ['./assessment-progress.component.scss']
})
export class AssessmentProgressComponent implements OnInit {

  assessment = data.assessment;
  constructor() {}

  ngOnInit(): void {
    Chart.register(...registerables);

    const ctx = document.getElementById('assessmentChart') as HTMLCanvasElement;
    ctx.height = 250;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Assignment', 'Quiz', 'Presentation', 'Lab', 'Viva'],
        datasets: [
          {
            label: 'Completed',
            data: [this.assessment.assignment.completed, this.assessment.quiz.completed, this.assessment.presentation.completed, this.assessment.lab.completed, this.assessment.viva.completed],
            backgroundColor: '#91B07C',
          },
          {
            label: 'Pending',
            data: [this.assessment.assignment.pending, this.assessment.quiz.pending, this.assessment.presentation.pending, this.assessment.lab.pending, this.assessment.viva.pending],
            backgroundColor: '#E8E8E8',
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: { stepSize: 25 },
          },
        },
        responsive: true,
      },
    });
  }

}
