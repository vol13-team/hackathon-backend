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

  async findOne(article_id: string) {
    try {
      const article = await this.prisma.article.findUnique({
        where: { article_id: article_id },
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
          article_title: dto.articleTitle,
          article_link: dto.articleLink,
          article_user_name: dto.articleUserName,
        },
      });
      return article;
    } catch (error) {
      throw error;
    }
  }
  async update(article_id: string, dto: UpdateArticleDto) {
    try {
      const article = await this.prisma.article.update({
        where: { article_id: article_id },
        data: {
          article_title: dto.articleTitle,
          article_link: dto.articleLink,
          article_user_name: dto.articleUserName,
        },
      });
      return article;
    } catch (error) {
      throw error;
    }
  }
  async delete(article_id: string) {
    try {
      const article = await this.prisma.article.delete({
        where: { article_id: article_id },
      });
      return article;
    } catch (error) {
      throw error;
    }
  }
}
