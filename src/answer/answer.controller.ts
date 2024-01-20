import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { CreateAnswerDto } from './dto';

@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Get()
  async findAll() {
    return this.answerService.finedAll();
  }

  @Get('/:answer_id')
  async finedByAnswerID(@Param('answer_id') answerId: string) {
    return this.answerService.finedByAnswerID(answerId);
  }

  @Get('issue/issue_id')
  async finedByIssueID(@Param('id') issueId: string) {
    return this.answerService.finedByIssueID(issueId);
  }

  @Post()
  async create(@Param('id') issueId: string, @Body() dto: CreateAnswerDto) {
    return this.answerService.create(dto, issueId);
  }
}
