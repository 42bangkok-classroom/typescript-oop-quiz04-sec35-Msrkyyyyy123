import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users/test')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get()
  test(): string[] {
    return this.UserService.test();
  }

  
}