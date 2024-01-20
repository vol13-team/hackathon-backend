import { Injectable } from '@nestjs/common';

import { CreateQuiitaDto } from './dto/createquiita.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class QiitaApiService {
  constructor(private prisma: PrismaService) {}

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
    return data;
  }

  async create(point: number) {
    const pickup = await this.getPickUp(point);
    for (let i = 0; i < point; i++) {
      const check = await this.checkURL(pickup[i]);
      if (check === false) {
        try {
          const res = await this.createQuiita(pickup[i]);
          return res;
        } catch (e) {
          console.log(e);
        }
      }
    }
  }

  async createQuiita(dto: CreateQuiitaDto) {
    const result = await this.prisma.qiitaArticle.create({
      data: {
        title: dto.title,
        url: dto.url,
        user_id: dto.user_id,
        icon_url: dto.icon_url,
      },
    });
    return result;
  }

  async checkURL(url: string) {
    try {
      const result = await this.prisma.qiitaArticle.findUnique({
        where: { url: url },
      });
      //dataがなかったらtrue
      if (result) {
        return false;
      }
      return true;
    } catch (error) {
      console.log(error);
    }
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
