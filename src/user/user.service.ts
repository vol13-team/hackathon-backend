import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    try {
      const users = await this.prisma.user.findMany();
      return users;
    } catch (error) {
      throw error;
    }
  }
  async findOne(id: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { UserID: id },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }
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
  async update(id: string, dto: CreateUserDto) {
    try {
      const user = await this.prisma.user.update({
        where: { UserID: id },
        data: {
          UserName: dto.userName,
          token: dto.token,
        },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }
  async delete(id: string) {
    try {
      const user = await this.prisma.user.delete({
        where: { UserID: id },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }
}
