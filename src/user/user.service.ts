import { Injectable, NotFoundException } from '@nestjs/common';
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
    const parsedData: unknown = JSON.parse(rawData);
    return parsedData as IUser[];
  }

  findOne(id: string, fields?: string[]): any {
    const users = this.findAll();
    const user = users.find((u: IUser) => u.id === id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (fields === undefined || fields.length === 0) {
      return user;
    }

    if (fields === undefined) {
      return [];
    }

    const result: Record<string, unknown> = {};
    const userAsRecord = user as unknown as Record<string, unknown>;
    fields.forEach((f) => {
      if (userAsRecord[f] !== undefined) {
        result[f] = userAsRecord[f];
      }
    });
    return result;
  }
}
