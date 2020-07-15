import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-due-data-table",
  templateUrl: "./due-data-table.component.html",
  styleUrls: ["./due-data-table.component.scss"]
})
export class DueDataTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  //   sortedByDueDateData: {
  //     name: string;
  //     y: number;
  //     drilldown: string;
  //     dueDate: number;
  //    }[] = this.debtData.sort((a, b) => a.dueDate - b.dueDate);
}
