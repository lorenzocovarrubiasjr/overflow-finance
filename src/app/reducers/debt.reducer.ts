import * as DebtActions from "../actions/debt.actions";
import { Debt } from "../models/debt.model";

export type Action = DebtActions.All;

const defaultState: Debt = {
  name: "",
  total: 0,
  dueDate: 1,
  interestRate: 0,
  paidOff: false
};

export function debtReducer(state: Debt = defaultState, action: Action) {
  switch (action.type) {
    case DebtActions.POST_PAYMENT:
      return { ...state, total: action.payload };
    case DebtActions.ADD_CHARGES:
      return { ...state, total: action.payload };
    case DebtActions.PAID_OFF:
      return { ...state, total: 0, paidOff: true };
    default:
      return state;
  }
}
