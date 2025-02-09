import { Expense as TExpense } from "../api/expense/Expense";

export const EXPENSE_TITLE_FIELD = "description";

export const ExpenseTitle = (record: TExpense): string => {
  return record.description?.toString() || String(record.id);
};
