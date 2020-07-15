import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HighchartsChartModule } from "highcharts-angular";
import { MatFormFieldModule } from "@angular/material/form-field";

import { AppComponent } from "./app.component";
import { HighchartComponent } from "./components/highchart/highchart.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";
import { DueDataTableComponent } from "./components/due-data-table/due-data-table.component";

import { debtDataReducer } from "./reducers/debt-data.reducer";
import { debtReducer } from "./reducers/debt.reducer";
import { AddDebtBarComponent } from "./components/add-debt-bar/add-debt-bar.component";
import { DebtsListComponent } from "./components/debts-list/debts-list.component";

@NgModule({
  declarations: [
    AppComponent,
    HighchartComponent,
    DueDataTableComponent,
    AddDebtBarComponent,
    DebtsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HighchartsChartModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    StoreModule.forRoot({
      debt: debtReducer,
      debtData: debtDataReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
