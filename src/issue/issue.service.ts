import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateIssueDto } from './dto';
import { UserService } from 'src/user/user.service';
import { ArticleService } from 'src/article/article.service';

@Injectable()
export class IssueService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly articleService: ArticleService,
    private readonly userService: UserService,
  ) {}

  async findAll() {
    try {
      const issues = await this.prismaService.issue.findMany();
      return issues;
    } catch (error) {
      throw error;
    }
  }
  async findOne(id: string) {
    try {
      const issue = await this.prismaService.issue.findUnique({
        where: { IssueID: id },
      });
      return issue;
    } catch (error) {
      throw error;
    }
  }
  async findByIssue(id: string) {
    try {
      const issue = await this.prismaService.issue.findUnique({
        where: { IssueID: id },
      });
      return issue;
    } catch (error) {
      throw error;
    }
  }

  async createIssue(issueDto: CreateIssueDto, articleId: string) {
    const issue = await this.prismaService.issue.create({
      data: {
        PostUser: {
          connect: {
            UserID: issueDto.postUserID,
          },
        },
        IssueName: issueDto.issueName,
        IssueDetail: issueDto.issueDetail,
        Visibility: issueDto.visibility,
        Option1: issueDto.option1,
        Option2: issueDto.option2,
        Option3: issueDto.option3,
        Option4: issueDto.option4,
        CorrectOption: issueDto.correctOption,
        Article: {
          // ネストされた書き込みを追加
          connect: {
            ArticleID: articleId,
          },
        },
      },
    });

    return issue;
  }
}
