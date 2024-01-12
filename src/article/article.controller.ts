import { Body, Controller, Post } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}
  @Post()
  create(@Body() dto: CreateArticleDto) {
    return this.articleService.create(dto);
  }
}
