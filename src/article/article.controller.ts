import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get()
  findAll() {
    return this.articleService.findAll();
  }

  @Get('/:article_id')
  findOne(@Param('article_id') article_id: string) {
    return this.articleService.findOne(article_id);
  }

  @Post()
  create(@Body() dto: CreateArticleDto) {
    return this.articleService.create(dto);
  }
  @Put('/:article_id')
  update(
    @Param('article_id') article_id: string,
    @Body() dto: CreateArticleDto,
  ) {
    return this.articleService.update(article_id, dto);
  }
  @Delete('/:article_id')
  delete(@Param('article_id') article_id: string) {
    return this.articleService.delete(article_id);
  }
}
