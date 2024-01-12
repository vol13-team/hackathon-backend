import { Injectable } from '@nestjs/common';
import { CreateArticleDto, UpdateArticleDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticleService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    try {
      const articles = await this.prisma.article.findMany();
      return articles;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string) {
    try {
      const article = await this.prisma.article.findUnique({
        where: { ArticleID: id },
      });
      return article;
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
  async update(id: string, dto: UpdateArticleDto) {
    try {
      const article = await this.prisma.article.update({
        where: { ArticleID: id },
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
