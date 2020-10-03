import { Module } from "@nestjs/common";
import { ArticlesController } from "./controllers/articles/articles.controller";
import { UsersController } from "./controllers/users/users.controller";
import { CashflowController } from "./controllers/cashflow/cashflow.controller";
import { ExpensesService } from "./services/expenses/expenses.service";
import { UsersService } from "./services/users/users.service";
import { EventsGateway } from "./gateways/events/events.gateway";

@Module({
  imports: [],
  controllers: [ArticlesController, UsersController, CashflowController],
  providers: [ExpensesService, UsersService, EventsGateway]
})
export class AppModule {}
