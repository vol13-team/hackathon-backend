import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { IssueService } from './issue.service';
import { CreateIssueDto } from './dto';

@Controller('issue')
export class IssueController {
  constructor(private issueService: IssueService) {}
  @Get()
  findAll() {
    return this.issueService.findAll();
  }

  @Get('/:issue_id')
  findByIssue(@Param('issue_id') issue_id_: string) {
    return this.issueService.findByIssue(issue_id_);
  }
  @Post('/:article_id')
  create(
    @Param('article_id') article_id: string,
    @Body() issueDto: CreateIssueDto,
  ) {
    return this.issueService.createIssue(issueDto, article_id);
  }
}
