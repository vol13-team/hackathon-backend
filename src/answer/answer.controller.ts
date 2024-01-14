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
  async findOne(@Param('id') answerId: string) {
    return this.answerService.finedOne(answerId);
  }

  @Post('/:issue_id')
  async create(@Param('/:id') issueId: string, @Body() dto: CreateAnswerDto) {
    console.log(dto);
    return this.answerService.create(dto, issueId);
  }
}
