import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";

@Component({
  selector: "app-highchart",
  templateUrl: "./highchart.component.html",
  styleUrls: ["./highchart.component.scss"]
})
export class HighchartComponent implements OnInit {
  constructor() {}

  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = "chart"; // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options = {
    chart: {
      type: "column"
    },
    title: {
      text: "OverFlow"
    },
    subtitle: {
      text: "You where made to thrive not strive"
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      title: {
        text: "Total Amount"
      }
    },
    plotOptions: {
      series: {
        borderWidth: 1,
        dataLabels: {
          enabled: true,
          format: "${point.y:.2f}"
        }
      }
    },
    series: [
      {
        name: "Lenders",
        colorByPoint: true,
        data: [
          { name: "One Main Financial", y: 8470.65, drilldown: "OMF" },
          { name: "Climb Credit", y: 7800, drilldown: "Climb" },
          { name: "Capital One Savor", y: 1900, drilldown: "Savor" }
        ],
        type: "column"
      }
    ]
  }; // required
  // chartCallback: Highcharts.ChartCallbackFunction = function (chart) { ... } // optional function, defaults to null
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false; // optional boolean, defaults to false

  ngOnInit(): void {}
}
