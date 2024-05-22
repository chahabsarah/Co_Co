import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';


@Component({
  selector: 'app-home-back',
  templateUrl: './home-back.component.html',
  styleUrls: ['./home-back.component.scss']
})
export class HomeBackComponent implements AfterViewInit {
  @ViewChild('trafficChart') trafficChartDiv!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    this.initEChart();
  }

  initEChart() {
    const ecInstance = echarts.init(this.trafficChartDiv.nativeElement);
    ecInstance.setOption({
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [{
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '18',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }]
    });
  }
}
