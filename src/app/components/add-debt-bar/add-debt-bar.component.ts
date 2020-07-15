import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import * as DebtActions from "../../actions/debt.actions";

@Component({
  selector: "app-add-debt-bar",
  templateUrl: "./add-debt-bar.component.html",
  styleUrls: ["./add-debt-bar.component.scss"]
})
export class AddDebtBarComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  addDebt(debtAmountInput: string, oweToInput: string): void {
    console.log("1 data: ", debtAmountInput);
    console.log("2 data: ", oweToInput);
    // this.store.dispatch(
    //   new DebtActions.AddDebt({
    //     name: oweToInput,
    //     total: parseFloat(debtAmountInput)
    //   })
    // );
  }
}
