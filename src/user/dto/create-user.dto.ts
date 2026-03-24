import { IsNotEmpty, IsEmail, IsString } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({message: 'firstName should not be empty'})
    @IsString()
    firstName: string;

    @IsNotEmpty({message: 'lastName should not be empty'})
    @IsString()
    lastName: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @IsString()
    username: string;
}
