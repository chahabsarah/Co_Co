import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StatsService, UserRoleStatistic } from '../service/stats.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-role-stats',
  templateUrl: './role-stats.component.html',
  styleUrls: ['./role-stats.component.scss']
})
export class RoleStatsComponent implements OnInit, AfterViewInit {
  @ViewChild('roleChart') roleChart!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  constructor(private statsService: StatsService) {
    
  }

  ngOnInit(): void {}

  /*ngAfterViewInit(): void {
    this.statsService.getUserRoleStatistics().subscribe({
      next: (data) => {
        this.initChart(data);
      },
      error: (error) => {
        console.error('Error fetching statistics:', error);
      }
    });
  }

  initChart(data: UserRoleStatistic[]): void {
    this.chart = new Chart(this.roleChart.nativeElement, {
      type: 'bar',
      data: {
        labels: data.map(item => item.roleName),
        datasets: [{
          label: 'Number of Users',
          data: data.map(item => item.count),
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
  }*/

  ngAfterViewInit(): void {
    const userRoles = ['Normal Users', 'External Users', 'Hosts', 'Room Seekers', 'Drivers'];
    const userCounts = [4, 3, 2, 1, 1];

    new Chart(this.roleChart.nativeElement, {
      type: 'bar',
      data: {
        labels: userRoles,
        datasets: [{
          label: 'Number of Users by Role',
          data: userCounts,
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)', // Red
            'rgba(255, 159, 64, 0.8)', // Orange
            'rgba(255, 205, 86, 0.8)', // Yellow
            'rgba(75, 192, 192, 0.8)', // Green
            'rgba(54, 162, 235, 0.8)', // Blue
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
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
}
