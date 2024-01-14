import { Module } from '@nestjs/common';
import { IssueController } from './issue.controller';
import { IssueService } from './issue.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ArticleService } from 'src/article/article.service';
import { ArticleModule } from 'src/article/article.module';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [PrismaModule, ArticleModule, UserModule],
  controllers: [IssueController],
  providers: [IssueService, ArticleService, UserService],
})
export class IssueModule {}
