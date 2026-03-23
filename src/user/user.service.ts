import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UserService {
  test(): User[] {
    return [];
  }

  // findAll(): User[]{
  //   return this.User.test();
  // } 
}

