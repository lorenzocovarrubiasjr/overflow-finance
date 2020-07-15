import * as DebtDataActions from "../actions/debt-data.actions";
import { DebtData } from "../models/debt-data.model";

export type Action = DebtDataActions.All;

const defaultState: DebtData[] = [
  {
    name: "One Main Financial",
    total: 8470.65,
    interestRate: 8,
    dueDate: 15,
    paidOff: false,
  },
  {
    name: "Climb Credit",
    total: 8189.0,
    interestRate: 8,
    dueDate: 15,
    paidOff: false,
  },
  {
    name: "Capital One Savor",
    total: 1933.97,
    interestRate: 18,
    dueDate: 10,
    paidOff: false,
  },
  {
    name: "Capital One Platinum",
    total: 1043.57,
    interestRate: 15,
    dueDate: 10,
    paidOff: false,
  },
  {
    name: "Bank of America Platinum Plus",
    total: 485.86,
    interestRate: 15,
    dueDate: 5,
    paidOff: false,
  },
  {
    name: "Google Synchrony",
    total: 647.9,
    interestRate: 7,
    dueDate: 15,
    paidOff: false,
  },
  {
    name: "Klarna",
    total: 356.6,
    interestRate: 12,
    dueDate: 15,
    paidOff: false,
  },
  {
    name: "Rent Loan - Mom",
    total: 1000.0,
    interestRate: 0,
    dueDate: 15,
    paidOff: false,
  },
  {
    name: "Pino Personal Loan",
    total: 900.0,
    interestRate: 0,
    dueDate: 15,
    paidOff: false,
  },
  {
    name: "Dodge Caliber",
    total: 1000.0,
    interestRate: 0,
    dueDate: 1,
    paidOff: false,
  },
  {
    name: "RoomsToGo Couches",
    total: 900.0,
    interestRate: 0,
    dueDate: 1,
    paidOff: false,
  },
];

export function debtDataReducer(
  state: DebtData[] = defaultState,
  action: Action
) {
  switch (action.type) {
    case DebtDataActions.ADD_DEBT:
      return { ...state, action };
  }
}
