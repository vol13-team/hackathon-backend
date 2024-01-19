import { Injectable } from '@nestjs/common';

@Injectable()
export class QiitaApiService {
  async getPickUp(page: number) {
    const url = `https://qiita.com/api/v2/items?pickup=true&per_page=${page}`;
    const response = await fetch(url);
    const jsonData = await response.json();
    const data = jsonData.map((item) => {
      return {
        title: item.title,
        url: item.url,
        user: item.user.id,
        icon_url: item.user.profile_image_url,
      };
    });
    console.log(jsonData);
    return data;
  }
  async search(query: string, page: number) {
    const url = `https://qiita.com/api/v2/items?query=${query}&per_page=${page}`;
    const response = await fetch(url);
    const jsonData = await response.json();
    const data = jsonData.map((item) => {
      return {
        title: item.title,
        url: item.url,
        user: item.user.id,
        icon_url: item.user.profile_image_url,
      };
    });
    return data;
  }
}
