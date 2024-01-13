import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  //   @Get()
  //   findOne() {
  //     return this.userService.findOne();
  //   }

  @Post()
  create() {
    return this.userService.create();
  }
}
