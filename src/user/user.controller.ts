import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.interface';

@Controller('users/test')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get()
  test(): User[] {
    return this.UserService.test();
  }
}
