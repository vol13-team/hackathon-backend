import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { UserController } from './user/user.controller';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ArticleModule } from './article/article.module';
import { TimesService } from './times/times.service';
import { QiitaApiModule } from './qiita_api/qiita_api.module';
import { IssueModule } from './issue/issue.module';
import { AnswerModule } from './answer/answer.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    AuthModule,
    UserModule,
    PrismaModule,
    ArticleModule,
    QiitaApiModule,
    IssueModule,
    AnswerModule,
  ],
  controllers: [AppController, AuthController, UserController],
  providers: [AppService, AuthService, UserService, TimesService, JwtService],
})
export class AppModule {}
