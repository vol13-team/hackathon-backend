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
  async finedByAnswerID(@Param('answer_id') answerId: string) {
    return this.answerService.finedByAnswerID(answerId);
  }

  @Post('/:issue_id')
  async create(
    @Param('/:issue_id') issueId: string,
    @Body() dto: CreateAnswerDto,
  ) {
    console.log(dto);
    return this.answerService.create(dto, issueId);
  }
}
