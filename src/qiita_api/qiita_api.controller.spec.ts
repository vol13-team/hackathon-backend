import { Test, TestingModule } from '@nestjs/testing';
import { QiitaApiController } from './qiita_api.controller';

describe('QiitaApiController', () => {
  let controller: QiitaApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QiitaApiController],
    }).compile();

    controller = module.get<QiitaApiController>(QiitaApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
