import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-chart-js',
  templateUrl: './chart-js.component.html',
  styleUrls: ['./chart-js.component.scss']
})
export class ChartJsComponent implements AfterViewInit {
  @ViewChild('lineChart') lineChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('barChart') barChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('pieChart') pieChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('doughnutChart') doughnutChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('radarChart') radarChart!: ElementRef<HTMLCanvasElement>;



  constructor() {
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    this.initializeLineChart();
    this.initializeBarChart();
    this.initializePieChart();
    this.initializeDoughnutChart();
    this.initializeRadarChart();
  }

  initializeLineChart(): void {
    const lineChart = new Chart(this.lineChart.nativeElement, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Demo Line Chart',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            maintainAspectRatio: false, // This will allow you to set a fixed height
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

initializeBarChart(): void {
  if (!this.barChart.nativeElement) return; // Ensure canvas element is accessible

  const barCtx = this.barChart.nativeElement.getContext('2d');
  if (!barCtx) return; // Ensure 2D context is obtained

  const barChart = new Chart(barCtx, {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Bar Chart',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
initializePieChart(): void {
  const pieChart = new Chart(this.pieChart.nativeElement, {
      type: 'pie',
      data: {
          labels: ['Red', 'Blue', 'Yellow'],
          datasets: [{
              label: 'Demo Pie Chart',
              data: [300, 50, 100],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 205, 86, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1
          }]
      }
  });
}

initializeDoughnutChart(): void {
  const doughnutChart = new Chart(this.doughnutChart.nativeElement, {
    type: 'doughnut',
    data: {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    }
  });
}

initializeRadarChart(): void {
  if (!this.radarChart.nativeElement) return;
  const radarCtx = this.radarChart.nativeElement.getContext('2d');
  if (!radarCtx) return;
  const radarChart = new Chart(radarCtx, {
    type: 'radar',
    data: {
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      datasets: [{
        label: 'First Dataset',
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }, {
        label: 'Second Dataset',
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
      }]
    },
    options: {
      elements: {
        line: {
          borderWidth: 3
        }
      }
    }
  });
}


}
