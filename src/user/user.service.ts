import { Injectable } from '@nestjs/common';
import { IUser } from './user.interface';

@Injectable()
export class UserService {
  private comments: IUser[] = [];
  test(): IUser[] {
    return [];
  }

  findAll(): IUser[] {
    return this.comments;
  }
}
