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
}
