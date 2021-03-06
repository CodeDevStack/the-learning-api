import { Controller, Get, Query } from "@nestjs/common";
import { UsersService } from "src/services/users/users.service";
import { User } from "../../interfaces/user.Interface";

@Controller("rest")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get("users")
  getUsers(
    @Query("amount") amount: number
  ): {
    result: User[];
  } {
    return {
      result: this.usersService.generateUsers(amount && Number(amount))
    };
  }
}
