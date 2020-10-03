import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ArticlesController } from "./controllers/articles/articles.controller";
import { UsersController } from "./controllers/users/users.controller";
import { CashflowController } from "./controllers/cashflow/cashflow.controller";
import { ExpensesService } from "./services/expenses/expenses.service";
import { UsersService } from "./services/users/users.service";

@Module({
  imports: [],
  controllers: [
    AppController,
    ArticlesController,
    UsersController,
    CashflowController
  ],
  providers: [AppService, ExpensesService, UsersService]
})
export class AppModule {}
