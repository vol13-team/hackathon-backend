import { Module } from '@nestjs/common';
import { QiitaApiController } from './qiita_api.controller';
import { QiitaApiService } from './qiita_api.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [QiitaApiController],
  providers: [QiitaApiService, PrismaService],
})
export class QiitaApiModule {}
