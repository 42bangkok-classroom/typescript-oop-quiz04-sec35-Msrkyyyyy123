import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.interface';

@Controller('users')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get('test')
  test(): User[] {
    return this.UserService.test();
  }
}
