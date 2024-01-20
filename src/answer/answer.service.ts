import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAnswerDto } from './dto';
@Injectable()
export class AnswerService {
  constructor(private readonly prismaService: PrismaService) {}
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

  async finedByIssueID(issueId: string) {
    return this.prismaService.answer.findMany({
      where: { issue_id: issueId },
    });
  }

  async create(dto: CreateAnswerDto, issueId: string) {
    const answer = await this.prismaService.answer.create({
      data: {
        answer_user_id: dto.answerUserId,
        select_option: dto.select_option_id,
        decision: dto.decision,
        issue_id: issueId,
      },
    });
    return answer;
  }
}
