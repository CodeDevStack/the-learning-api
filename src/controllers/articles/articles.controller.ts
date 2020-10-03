import { Controller, Get } from "@nestjs/common";
import { Article } from "../../interfaces/articles.interface";

@Controller("rest")
export class ArticlesController {
  @Get("articles")
  getArticles(): { result: Article[] } {
    return {
      result: [
        { title: "test", content: "lorem", subtitle: "", image: "", id: "" }
      ]
    };
  }
}
