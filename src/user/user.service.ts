import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto';
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
  async findOne(user_id: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { UserID: user_id },
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
          UserID: dto.user_id,
          UserName: dto.user_name,
          token: dto.token,
        },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }
  async update(user_id: string, dto: UpdateUserDto) {
    try {
      const user = await this.prisma.user.update({
        where: { UserID: user_id },
        data: {
          UserName: dto.user_name,
          token: dto.token,
        },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }
  async delete(user_id: string) {
    try {
      const user = await this.prisma.user.delete({
        where: { UserID: user_id },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }
}
