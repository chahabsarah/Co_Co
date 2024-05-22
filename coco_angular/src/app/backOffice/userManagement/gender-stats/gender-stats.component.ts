import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { StatsService } from '../service/stats.service';


@Component({
  selector: 'app-gender-stats',
  templateUrl: './gender-stats.component.html',
  styleUrls: ['./gender-stats.component.scss']
})
export class GenderStatsComponent {
  chart: any;

  constructor(private statsService: StatsService) {
    Chart.register(...registerables); // Register the necessary components
  }

  

}
