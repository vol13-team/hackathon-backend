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

  // 全部のissueを取得
  async findAll() {
    try {
      const issues = await this.prismaService.issue.findMany();
      return issues;
    } catch (error) {
      throw error;
    }
  }

  // 記事に紐づくissueを取得
  async findByIssue(issue_id: string) {
    try {
      const issue = await this.prismaService.issue.findUnique({
        where: { issue_id: issue_id },
      });
      return issue;
    } catch (error) {
      throw error;
    }
  }

  // 記事に紐づくissueを作成
  async createIssue(issueDto: CreateIssueDto, article_id: string) {
    const issue = await this.prismaService.issue.create({
      data: {
        post_user: {
          connect: {
            user_id: issueDto.post_user_id,
          },
        },
        issue_name: issueDto.issue_name,
        issue_detail: issueDto.issueDetail,
        visibility: issueDto.visibility,
        option1: issueDto.option1,
        option2: issueDto.option2,
        option3: issueDto.option3,
        option4: issueDto.option4,
        correct_option: issueDto.correct_option,
        article: {
          // ネストされた書き込みを追加
          connect: {
            article_id: article_id,
          },
        },
      },
    });
  }
  async updateIssue(issueDto: CreateIssueDto, issue_id: string) {
    const update_issue = await this.prismaService.issue.update({
      where: { issue_id: issue_id },
      data: {
        issue_name: issueDto.issue_name,
        issue_detail: issueDto.issueDetail,
        visibility: issueDto.visibility,
        option1: issueDto.option1,
        option2: issueDto.option2,
        option3: issueDto.option3,
        option4: issueDto.option4,
        correct_option: issueDto.correct_option,
        // 更新日を記載
        update_at: issueDto.update_at,
        article: {
          connect: {
            article_id: issueDto.article_id,
          },
        },
      },
    });
  }
  // 記事に紐づくissueを削除
  async deleteIssue(issue_id: string) {
    const delete_issue = await this.prismaService.issue.delete({
      where: { issue_id: issue_id },
    });
  }
}
