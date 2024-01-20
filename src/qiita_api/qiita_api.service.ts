import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
@Injectable()
export class QiitaApiService {
  async getPickUp(page: number) {
    const prisma = new PrismaClient();
    const url = `https://qiita.com/api/v2/items?pickup=true&per_page=${page}`;
    const response = await fetch(url);
    const jsonData = await response.json();
    const data = jsonData.map((item) => {
      return {
        title: item.title,
        url: item.url,
        user: item.user.id,
        icon_url: item.user.profile_image_url,
        tag: item.user.tag,
      };
    });

    await prisma.quiita.create((data.jsonData.map(item) => {
      title: item.title,
      url: item.url,
      user: item.user,
      icon_url: item.icon_url,
      tags: item.tag,
      }));

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
