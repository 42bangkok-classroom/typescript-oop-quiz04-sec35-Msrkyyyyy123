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

//   @Get()
//   @ApiQuery({ name: 'postId', required: false, description: 'ID ของบทความ (ถ้าไม่ใส่จะดึงทั้งหมด)' })
//   findAll(@Query('postId') postId?: string): ApiResponse<IUser[]> {
//     let data: User[];
//     if (postId) {
//       data = this.UserService.findAll();
//     }
//     return {
//       success: true,
//       message: 'ดึงข้อมูลคอมเมนต์สำเร็จ',
//       data: data,
//     };
//   }
}
