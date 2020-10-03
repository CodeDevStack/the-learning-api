import { Injectable } from "@nestjs/common";
import dayjs from "dayjs";
import { expenses, incomes } from "src/services/expenses/expenses";
import { Cashflow } from "src/interfaces/cashflow.interface";
import { v4 as uuidv4 } from "uuid";
import { randomFromArray } from "../../util/randomFromArray";

const generateExpense = (date: string): Cashflow => {
  const isExpense = Math.random() > 0.1;

  const concept = isExpense
    ? randomFromArray(expenses)
    : randomFromArray(incomes);

  const amount = (isExpense
    ? Math.random() * -1000
    : Math.random() * 1000
  ).toFixed(2);

  return {
    amount,
    concept,
    date: dayjs(date).format("YYYY-MM-DD"),
    id: uuidv4()
  };
};

const generateExpenses = (amount: number) => {
  return Array.from(Array(amount)).map((_empty, index) =>
    generateExpense(
      dayjs()
        .subtract(amount - index, "d")
        .toISOString()
    )
  );
};

@Injectable()
export class ExpensesService {
  generateExpenses(amount = 50): Cashflow[] {
    return generateExpenses(amount);
  }
}
