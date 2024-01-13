import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateUserDto) {
    try {
      const user = await this.prisma.user.create({
        data: {
          UserID: dto.userId,
          UserName: dto.userName,
          token: dto.token,
        },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }
}
