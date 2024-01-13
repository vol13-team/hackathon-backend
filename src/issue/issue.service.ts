import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateIssueDto, CreateOptionsDto } from './dto';

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
  async create(
    articleId: string,
    issueDto: CreateIssueDto,
    optionsDto: CreateOptionsDto,
  ) {
    try {
      const options = await this.prismaService.issueOptions.create({
        data: {
          Option1: optionsDto.option1,
          Option2: optionsDto.option2,
          Option3: optionsDto.option3,
          Option4: optionsDto.option4,
          CorrectOption: optionsDto.correctOption,
        },
      });
      const optionId = options.OptionID;
      const issue = await this.prismaService.issue.create({
        data: {
          IssueName: issueDto.IssueName,
          IssueDetail: issueDto.IssueDetail,
          Visibility: issueDto.Visibility,
          explanation: issueDto.explanation,
          PostUserID: issueDto.PostUserID,
          ArticleID: articleId,
          OptionsID: optionId,
        },
      });
      return { issue, options };
    } catch (error) {
      throw error;
    }
  }
}
