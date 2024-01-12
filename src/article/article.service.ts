import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
  //https://qiita.com/api/v2/items?pickup=true&per_page=20をたたく

  create(): string {
    return 'This action returns all articles';
  }
}
