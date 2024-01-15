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

  @Get('/:id')
  async finedByAnswerID(@Param('id') answerId: string) {
    return this.answerService.finedByAnswerID(answerId);
  }
  @Get('/issue_id')
  async finedByIssueID(@Param('id') issueId: string) {
    return this.answerService.finedByIssueID(issueId);
  }

  @Post('/:issue_id')
  async create(@Param('/:id') issueId: string, @Body() dto: CreateAnswerDto) {
    console.log(dto);
    return this.answerService.create(dto, issueId);
  }
}
