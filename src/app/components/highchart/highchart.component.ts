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
          { name: "Climb Credit", y: 8189.0, drilldown: "Climb" },
          { name: "Capital One Savor", y: 1933.97, drilldown: "Savor" },
          {
            name: "Capital One Platinum",
            y: 1043.57,
            drilldown: "CC Platinum"
          },
          {
            name: "Bank of America Platinum Plus",
            y: 485.86,
            drilldown: "BofA CC"
          },
          { name: "Google Synchrony", y: 647.9, drilldown: "Google Fi" },
          { name: "Klarna", y: 356.6, drilldown: "Klarna" },
          { name: "Rent Loan", y: 1000.0, drilldown: "Money owed to mom" },
          {
            name: "Pino Personal Loan",
            y: 900.0,
            drilldown: "Money owed to Pino"
          }
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
