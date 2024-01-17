import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  user_id: string;

  @IsString()
  @IsNotEmpty()
  user_name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  user_name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
