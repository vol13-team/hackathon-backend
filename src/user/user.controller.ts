import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @Get('/:user_id')
  findOne(@Param('user_id') user_id: string) {
    return this.userService.findOne(user_id);
  }

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }
  @Put('/:user_id')
  update(@Param('user_id') user_id: string, @Body() dto: CreateUserDto) {
    return this.userService.update(user_id, dto);
  }
  @Delete('/:user_id')
  delete(@Param('user_id') user_id: string) {
    return this.userService.delete(user_id);
  }
}
