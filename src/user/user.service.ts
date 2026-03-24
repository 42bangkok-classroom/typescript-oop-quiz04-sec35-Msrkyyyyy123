import { Injectable } from '@nestjs/common';
import { IUser } from './user.interface';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class UserService {
  test(): IUser[] {
    return [];
  }

  findAll(): IUser[] {
    const filePath = path.join(process.cwd(), 'data', 'users.json');
    const rawData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(rawData) as IUser[];
  }
}
