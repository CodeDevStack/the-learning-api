import { Injectable } from "@nestjs/common";
import { User } from "src/interfaces/user.Interface";
import { randomFromArray } from "src/util/randomFromArray";
import { names } from "./names";
import { v4 as uuidv4 } from "uuid";
import { lastNames } from "./lastNames";
import removeAccents from "remove-accents";

const generateUser = (): User => {
  const name = randomFromArray(names);
  const lastName = randomFromArray(lastNames);

  const username = removeAccents(`${name}${lastName}`);

  const email = `${username
    .replace(/\s/, "")
    .toLowerCase()}@thelearningapi.com`;

  return {
    name,
    lastName,
    username,
    email,
    picture: "https://thispersondoesnotexist.com/image",
    id: uuidv4()
  };
};

const generateUsers = (amount: number) => {
  return Array.from(Array(amount)).map(() => generateUser());
};

@Injectable()
export class UsersService {
  generateUsers(amount = 1): User[] {
    return generateUsers(amount);
  }
}
