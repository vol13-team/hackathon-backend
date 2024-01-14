import { Body, Controller, Param, Post } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { CreateAnswerDto } from './dto';

@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Post('/:issue_id')
  async create(@Param('/:id') issueId: string, @Body() dto: CreateAnswerDto) {
    console.log(dto);
    return this.answerService.create(dto, issueId);
  }
}
