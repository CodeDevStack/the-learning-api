import { Controller, Get } from "@nestjs/common";
import { AppService } from "src/app.service";
import { Article } from "../../interfaces/articles.interface";

@Controller("rest")
export class ArticlesController {
  constructor(private readonly appService: AppService) {}

  @Get("articles")
  getArticles(): { result: Article[] } {
    return {
      result: [
        { title: "test", content: "lorem", subtitle: "", image: "", id: "" }
      ]
    };
  }
}
