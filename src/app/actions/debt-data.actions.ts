import { Action } from "@ngrx/store";

export const ADD_DEBT = "[DebtData] Add Debt";
export const PAY_OFF_DEBT = "[DebtData] Pay Off Debt";
export const MAKE_PAYMENT = "[DebtData] Make Payment";
export const DELETE_DEBT = "[DebtData] Delete Debt";

export class AddDebt implements Action {
  readonly type = ADD_DEBT;
  constructor(
    public payload: {
      name: string;
      y: number;
      drilldown: string;
      dueDate: number;
    }
  ) {}
}

export class PayOffDebt implements Action {
  readonly type = PAY_OFF_DEBT;
  constructor(public payload: {}) {}
}

export class MakePayment implements Action {
  readonly type = MAKE_PAYMENT;
  constructor(public payload: {}) {}
}

export class DeleteDebt implements Action {
  readonly type = DELETE_DEBT;
  constructor(public payload: {}) {}
}

export type All = AddDebt | PayOffDebt | MakePayment | DeleteDebt;
