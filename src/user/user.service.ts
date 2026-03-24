import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser } from './user.interface';
import { CreateUserDto } from './dto/create-user.dto';
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

    if (fields === undefined) {
      return user;
    }

    const result: Record<string, unknown> = {};
    const userAsRecord = user as unknown as Record<string, unknown>;
    fields.forEach((f) => {
      if (f && userAsRecord[f] !== undefined) {
        result[f] = userAsRecord[f];
      }
    });
    return result;
  }

  create(dto: CreateUserDto): IUser{
    const users = this.findAll();

    const newId = (users.length > 0
      ? Math.max(...users.map(u => parseInt(u.id))) + 1
      : 1
    ).toString();

    const newUser: IUser = {
      id: newId,
      ...dto
    };

    users.push(newUser);

    const filePath = path.join(process.cwd(), 'data', 'users.json');
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2), 'utf8');

    return newUser;
  }
}
