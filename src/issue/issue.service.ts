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

  async createOption(optionsDto: CreateOptionsDto) {
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
      return options;
    } catch (error) {
      throw error;
    }
  }
  async createIssue(
    issueDto: CreateIssueDto,
    articleId: string,
    optionId: string,
  ) {
    try {
      const issue = await this.prismaService.issue.create({
        data: {
          IssueName: issueDto.issueName,
          IssueDetail: issueDto.issueDetail,
          Visibility: issueDto.visibility,
          explanation: issueDto.explanation,
          PostUserID: issueDto.postUserID,
          ArticleID: articleId,
          OptionsID: optionId,
        },
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
      const options = await this.createOption(optionsDto);
      const optionId = options.OptionID;
      const issue = await this.createIssue(issueDto, articleId, optionId);
      return {
        options,
        issue,
      };
    } catch (error) {
      throw error;
    }
  }
}
