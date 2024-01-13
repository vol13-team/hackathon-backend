import { Controller, Get, Param } from '@nestjs/common';
import { IssueService } from './issue.service';

@Controller('issue')
export class IssueController {
  constructor(private issueService: IssueService) {}
  @Get()
  findAll() {
    return this.issueService.findAll();
  }
  @Get('/:id')
  findByIssue(@Param('id') id: string) {
    return this.issueService.findByIssue(id);
  }
}
