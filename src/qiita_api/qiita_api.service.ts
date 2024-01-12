import { Injectable } from '@nestjs/common';

@Injectable()
export class QiitaApiService {
  getPickUp(page: number) {
    fetch(`https://qiita.com/api/v2/items?pickup=true&per_page=${page}`);
  }
}
