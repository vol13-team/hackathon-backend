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
        where: { article_id: id },
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
          article_title: dto.article_title,
          article_link: dto.article_link,
          article_user_name: dto.article_user_name,
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
        where: { article_id: id },
        data: {
          article_title: dto.article_title,
          article_link: dto.article_link,
          article_user_name: dto.article_user_name,
        },
      });
      return article;
    } catch (error) {
      throw error;
    }
  }
  async delete(id: string) {
    try {
      const article = await this.prisma.article.delete({
        where: { article_id: id },
      });
      return article;
    } catch (error) {
      throw error;
    }
  }
}
