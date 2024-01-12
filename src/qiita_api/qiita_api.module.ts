import { Module } from '@nestjs/common';
import { QiitaApiController } from './qiita_api.controller';
import { QiitaApiService } from './qiita_api.service';

@Module({
  controllers: [QiitaApiController],
  providers: [QiitaApiService],
})
export class QiitaApiModule {}
