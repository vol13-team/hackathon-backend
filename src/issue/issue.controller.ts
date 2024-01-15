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
  findByIssue(@Param('id') id: string) {
    return this.issueService.findByIssue(id);
  }
  @Post('/:article_id')
  create(
    @Param('article_id') articleId: string,
    @Body() issueDto: CreateIssueDto,
  ) {
    return this.issueService.createIssue(issueDto, articleId);
  }
}
