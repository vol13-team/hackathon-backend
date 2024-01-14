import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { IssueService } from './issue.service';
import { CreateIssueDto, CreateOptionsDto } from './dto';

@Controller('issue')
export class IssueController {
  constructor(private issueService: IssueService) {}
  @Get()
  findAll() {
    return this.issueService.findAll();
  }
  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.issueService.findOne(id);
  }
  @Get('issue/:id')
  findByIssue(@Param('id') id: string) {
    return this.issueService.findByIssue(id);
  }
  @Post('/:articleId')
  create(
    @Param('articleId') articleId: string,
    @Body() issueDto: CreateIssueDto,
  ) {
    return this.issueService.create(issueDto, articleId);
  }
}
