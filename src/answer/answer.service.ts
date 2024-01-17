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
  //create verifying
  //issue id,select optionを受け取る
  //issue idからissue_collectionを取得
  //issue id===issue_collectionの場合decision = true登録
  //issue id!==issue_collectionの場合decision = false登録

  //get verifying
  //answer_idを受け取る
  //answer_idからanswerを取得
  //issueからcollectOption,explanationを取得
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
    const issue = await this.issueService.findByIssue(answer.issue_id);
    const selectOption = await answer.select_option; //選択した選択肢
    const collectOption = issue.correct_option;
    if (selectOption === collectOption) {
      return true;
    }
    return false;

    //問題の正解
  }
}
