import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HighchartsChartModule } from "highcharts-angular";

import { AppComponent } from "./app.component";
import { HighchartComponent } from "./components/highchart/highchart.component";

@NgModule({
  declarations: [AppComponent, HighchartComponent],
  imports: [BrowserModule, HighchartsChartModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
