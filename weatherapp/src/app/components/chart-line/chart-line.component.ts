import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'

@Component({
  selector: 'chartline',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.scss']
})
export class ChartLineComponent implements OnInit {
  todayDate: Date = new Date();
  timenow = this.todayDate.getHours() + ':' + this.todayDate.getMinutes();
  timeone = this.todayDate.getHours()+1 + ':' + this.todayDate.getMinutes();
  timetwo = this.todayDate.getHours()+2 + ':' + this.todayDate.getMinutes();
  timethree = this.todayDate.getHours()+3 + ':' + this.todayDate.getMinutes();
  timefour = this.todayDate.getHours()+4 + ':' + this.todayDate.getMinutes();
  timefive = this.todayDate.getHours()+5 + ':' + this.todayDate.getMinutes();
  timesix = this.todayDate.getHours()+6 + ':' + this.todayDate.getMinutes();

  constructor() { }

  ngOnInit(): void {
    var myChart = new Chart("chartLine", {
        type: 'line',
        data: {
          labels: ["NOW", this.timeone, this.timetwo, this.timethree, this.timefour, this.timefive, this.timesix],
          datasets: [
            {
                label: 'Humidity',
                data: [60, 20, 30, 80, 50, 20, 10, 5],
                fill: true,
                backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                'rgb(75, 192, 192)',
                ],
                borderWidth: 1,
            },
          ],
      },
      options: {          
          legend: {
              // position: 'bottom',
              align: 'end',
              labels: {
                fontColor: "#5f6368",
              },
          },
      
          maintainAspectRatio: false,
          scales: {
            xAxes: [{
              
              // position: 'bottom',
              ticks: {
                fontColor: "#5f6368"
              },
              gridLines: {
                color: "#fff",
                zeroLineColor: "#5f6368",
              },
              scaleLabel: {
                display: true,
              }
            }],
            yAxes: [{
              ticks: {
                fontColor: "#5f6368",
                lineHeight: 4,
              },
              gridLines: {
                color: "#fff",
                zeroLineColor: "#5f6368",
              },
              scaleLabel: {
                display: true
              }
            }]
          }
      },
    });
  }

}
