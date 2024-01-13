import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  //   @Get()
  //   findOne() {
  //     return this.userService.findOne();
  //   }

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }
  @Put('/:id')
  update(@Param('id') id: string, @Body() dto: CreateUserDto) {
    return this.userService.update(id, dto);
  }
}
