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
  async finedOne(answerId: string) {
    return this.prismaService.answer.findUnique({
      where: { AnswerID: answerId },
    });
  }
  async create(dto: CreateAnswerDto, issueId: string) {
    console.log(dto, issueId);
  }
  async getAns() {}
}
