import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ArticleService {
  constructor(
    private readonly prisma: PrismaService,
    private config: ConfigService,
  ) {}

  async findAll() {
    try {
      const articles = await this.prisma.article.findMany();
      return articles;
    } catch (error) {
      throw error;
    }
  }

  async create(dto: CreateArticleDto) {
    try {
      const article = await this.prisma.article.create({
        data: {
          ArticleTitle: dto.articleTitle,
          ArticleLink: dto.articleLink,
          ArticleThumbnail: dto.articleThumbnail,
        },
      });
      return article;
    } catch (error) {
      throw error;
    }
  }
}
