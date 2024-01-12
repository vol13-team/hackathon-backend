import { Controller, Get, Param } from '@nestjs/common';
import { QiitaApiService } from './qiita_api.service';

@Controller('qiita-api')
export class QiitaApiController {
  constructor(private qiitaApiService: QiitaApiService) {}
  @Get('/:page')
  getPickUp(@Param('page') page: number) {
    return this.qiitaApiService.getPickUp(page);
  }
}
