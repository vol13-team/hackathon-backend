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
        where: { user_id: user_id },
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
          user_id: dto.user_id,
          user_name: dto.user_name,
          email: dto.email,
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
        where: { user_id: user_id },
        data: {
          user_name: dto.user_name,
          email: dto.email,
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
        where: { user_id: user_id },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }
}
