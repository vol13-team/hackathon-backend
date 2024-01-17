import { Module } from '@nestjs/common';
import { AnswerController } from './answer.controller';
import { AnswerService } from './answer.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { IssueService } from 'src/issue/issue.service';

@Module({
  imports: [PrismaModule],
  controllers: [AnswerController],
  providers: [AnswerService, IssueService],
})
export class AnswerModule {}
