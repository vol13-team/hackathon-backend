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

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateArticleDto) {
    return this.articleService.create(dto);
  }
  @Put('/:id')
  update(@Param('id') id: string, @Body() dto: CreateArticleDto) {
    return this.articleService.update(id, dto);
  }
  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.articleService.delete(id);
  }
}
