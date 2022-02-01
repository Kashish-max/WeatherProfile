import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import {Chart} from 'chart.js'
import { from } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url = "https://weatherapi-beta.vercel.app/weather/latlong";

  constructor(private http: HttpClient) { }
  
  getWeatherDataByCoords(lat, lon) {
    let params = new HttpParams()
      .set("lat", lat)
      .set("lon", lon)
      .set("units", "imperials")
    return this.http.get(this.url, { params });
  }

  todayDate: Date = new Date();
  timenow = this.todayDate.getHours() + ':' + this.todayDate.getMinutes();
  timeone = this.todayDate.getHours()+1 + ':' + this.todayDate.getMinutes();
  timetwo = this.todayDate.getHours()+2 + ':' + this.todayDate.getMinutes();
  timethree = this.todayDate.getHours()+3 + ':' + this.todayDate.getMinutes();
  timefour = this.todayDate.getHours()+4 + ':' + this.todayDate.getMinutes();
  timefive = this.todayDate.getHours()+5 + ':' + this.todayDate.getMinutes();
  timesix = this.todayDate.getHours()+6 + ':' + this.todayDate.getMinutes();
  getChart(chartData) {
    var myChart = new Chart("chartLine", {
        type: 'line',
        data: {
          labels: ["NOW", this.timeone, this.timetwo, this.timethree, this.timefour, this.timefive, this.timesix],
          datasets: [
            {
                label: 'Humidity(%)',
                data: chartData.humidity,
                fill: true,
                backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                'rgb(75, 192, 192)',
                ],
                borderWidth: 1,
            },
            {
                label: 'Temperature(°C)',
                data: chartData.temperature,
                fill: true,
                backgroundColor: [
                'rgba(253, 184, 19, 0.1)',
                ],
                borderColor: [
                'rgb(253, 184, 19)',
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
                fontColor: "#5f6368",
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
