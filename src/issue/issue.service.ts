import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

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
  async create(id: string, dto: any) {
    try {
      const options = await this.prismaService.issueOptions.create({
        data: {
          Option1: dto.option1,
          Option2: dto.option2,
          Option3: dto.option3,
          Option4: dto.option4,
          CorrectOption: dto.correctOption,
        },
      });
      const optionId = options.OptionID;
      const issue = await this.prismaService.issue.create({
        data: {
          IssueName: dto.IssueName,
          IssueDetail: dto.IssueDetail,
          Visibility: dto.Visibility,
          explanation: dto.explanation,
          ArticleID: dto.ArticleID,
          PostUserID: dto.PostUserID,
          OptionsID: optionId,
        },
      });
      return { issue, options };
    } catch (error) {
      throw error;
    }
  }
}
