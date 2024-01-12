import { Injectable } from '@nestjs/common';

@Injectable()
export class QiitaApiService {
  async getPickUp(page: number) {
    const url = `https://qiita.com/api/v2/items?pickup=true&per_page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}
