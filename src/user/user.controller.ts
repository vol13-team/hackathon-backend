import { Controller, Post } from '@nestjs/common';
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
  create(dto: CreateUserDto) {
    return this.userService.create(dto);
  }
}
