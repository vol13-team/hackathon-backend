import { Controller, Post } from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}
  @Post()
  create(): any {
    return this.articleService.create();
  }
}
