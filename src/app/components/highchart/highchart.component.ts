import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";

@Component({
  selector: "app-highchart",
  templateUrl: "./highchart.component.html",
  styleUrls: ["./highchart.component.scss"],
})
export class HighchartComponent implements OnInit {
  constructor() {}
  debtData: {
    name: string;
    y: number;
    drilldown: string;
    dueDate: number;
    color?: string;
    paidOff: boolean;
  }[] = [
    {
      name: "One Main Financial",
      y: 8470.65,
      drilldown: "OMF",
      dueDate: 15,
      paidOff: false,
    },
    {
      name: "Climb Credit",
      y: 8189.0,
      drilldown: "Climb",
      dueDate: 15,
      paidOff: false,
    },
    {
      name: "Capital One Savor",
      y: 1933.97,
      drilldown: "Savor",
      dueDate: 10,
      paidOff: false,
    },
    {
      name: "Capital One Platinum",
      y: 1043.57,
      drilldown: "CC Platinum",
      dueDate: 10,
      paidOff: false,
    },
    {
      name: "Bank of America Platinum Plus",
      y: 485.86,
      drilldown: "BofA CC",
      dueDate: 5,
      color: "#CACACA",
      paidOff: true,
    },
    {
      name: "Google Synchrony",
      y: 647.9,
      drilldown: "Google Fi",
      dueDate: 15,
      color: "#CACACA",
      paidOff: true,
    },
    {
      name: "Klarna",
      y: 356.6,
      drilldown: "Klarna",
      dueDate: 15,
      color: "#CACACA",
      paidOff: true,
    },
    {
      name: "Rent Loan",
      y: 1000.0,
      drilldown: "Money owed to mom",
      dueDate: 15,
      color: "#CACACA",
      paidOff: true,
    },
    {
      name: "Pino Personal Loan",
      y: 900.0,
      drilldown: "Money owed to Pino",
      dueDate: 15,
      paidOff: false,
    },
    {
      name: "Dodge Caliber",
      y: 1000.0,
      drilldown: "Money owed to father in law",
      dueDate: 1,
      color: "#CACACA",
      paidOff: true,
    },
    {
      name: "RoomsToGo Couches",
      y: 900.0,
      drilldown: "Money owed to mom for couches",
      dueDate: 1,
      paidOff: false,
    },
    {
      name: "Office Depot Business Card",
      y: 350.0,
      drilldown: "Owed for monitor and printer",
      dueDate: 15,
      color: "#CACACA",
      paidOff: true,
    },
  ];

  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = "chart"; // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options = {
    chart: {
      type: "column",
    },
    title: {
      text: "OverFlow",
    },
    subtitle: {
      text: "You where made to thrive not strive",
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: "Total Amount",
      },
    },
    plotOptions: {
      series: {
        borderWidth: 1,
        dataLabels: {
          enabled: true,
          format: "${point.y:.2f}",
        },
      },
    },
    series: [
      {
        name: "Lenders",
        colorByPoint: true,
        data: this.debtData.sort((a, b) => a.y - b.y),
        type: "column",
      },
    ],
  }; // required
  // chartCallback: Highcharts.ChartCallbackFunction = function (chart) { ... } // optional function, defaults to null
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false; // optional boolean, defaults to false
  total: number = 0;
  paidOff: number = 0;

  ngOnInit(): void {
    this.totalDebt();
    this.debtPaidOff();
  }

  totalDebt() {
    for (let i = 0; i < this.chartOptions.series[0]["data"].length; i++) {
      this.total += this.chartOptions.series[0]["data"][i].y;
    }
  }

  debtPaidOff() {
    for (let i = 0; i < this.chartOptions.series[0]["data"].length; i++) {
      this.chartOptions.series[0]["data"][i].paidOff
        ? (this.paidOff += this.chartOptions.series[0]["data"][i].y)
        : 0;
    }
  }
}
