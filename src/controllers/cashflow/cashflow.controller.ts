import { Controller, Get, Query } from "@nestjs/common";
import { ExpensesService } from "src/services/expenses/expenses.service";
import { Cashflow } from "../../interfaces/cashflow.interface";

@Controller("rest")
export class CashflowController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Get("cashflow")
  getCashflow(
    @Query("amount") amount: number
  ): {
    result: Cashflow[];
  } {
    return {
      result: this.expensesService.generateExpenses(amount && Number(amount))
    };
  }
}
