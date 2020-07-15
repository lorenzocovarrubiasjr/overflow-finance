export interface Debt {
  name: string;
  total: number;
  dueDate?: number;
  interestRate?: number;
  paidOff?: boolean;
}
