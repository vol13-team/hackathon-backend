import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateIssueDto } from './dto';

@Injectable()
export class IssueService {
  constructor(private readonly prismaService: PrismaService) {}

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

  async create(issueDto: CreateIssueDto, articleId: string) {
    try {
      const issue = await this.prismaService.issue.create({
        data: {
          IssueName: issueDto.issueName,
          IssueDetail: issueDto.issueDetail,
          Visibility: issueDto.visibility,
          explanation: issueDto.explanation,
          Option1: issueDto.option1,
          Option2: issueDto.option2,
          Option3: issueDto.option3,
          Option4: issueDto.option4,
          CorrectOption: issueDto.correctOption,
          PostUserID: issueDto.postUserID,
          ArticleID: articleId,
        },
      });
      return issue;
    } catch (error) {
      throw error;
    }
  }
}
