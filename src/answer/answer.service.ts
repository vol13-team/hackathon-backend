import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAnswerDto } from './dto';
import { IssueService } from 'src/issue/issue.service';
@Injectable()
export class AnswerService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly issueService: IssueService,
  ) {}

  async finedAll() {
    return this.prismaService.answer.findMany();
  }
  async finedByAnswerID(answerId: string) {
    return this.prismaService.answer.findUnique({
      where: { answer_id: answerId },
    });
  }

  async create(dto: CreateAnswerDto, issueId: string) {
    const answer = await this.prismaService.answer.create({
      data: {
        answer_user: {
          connect: {
            user_id: dto.answer_user_id,
          },
        },
        issue: {
          connect: {
            issue_id: issueId,
          },
        },
        select_option: dto.select_option,

        decision: dto.decision,
      },
    });
    return answer;
  }

  async answerVerifying(answer_id: string) {
    const answer = await this.finedByAnswerID(answer_id);
    const issue = await this.issueService.findByIssueID(answer.issue_id);
    const selectOption = await answer.select_option; //選択した選択肢
    const collectOption = issue.correct_option;

    //選択した選択肢と正解の選択肢が一致しているならtrue
    if (selectOption === collectOption) {
      return true;
    }
    return false;
  }
}
