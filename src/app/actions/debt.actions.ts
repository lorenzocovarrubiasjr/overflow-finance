import { Action } from "@ngrx/store";
import { Debt } from "../models/debt.model";

export const ADD_DEBT = "[Debt] Add Debt";
export const POST_PAYMENT = "[Debt] Post Payment";
export const ADD_CHARGES = "[Debt] Add Charges";
export const PAID_OFF = "[Debt] Paid Off";

export class PostPayment implements Action {
  readonly type = POST_PAYMENT;
  constructor(public payload: number) {}
}

export class AddCharges implements Action {
  readonly type = ADD_CHARGES;
  constructor(public payload: number) {}
}

export class PaidOff implements Action {
  readonly type = PAID_OFF;
}

export type All = PostPayment | AddCharges | PaidOff;
