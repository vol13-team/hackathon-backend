import { IsNotEmpty, IsString } from 'class-validator';

export class CreateQuiitaDto {
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsNotEmpty()
  @IsString()
  url: string;
  @IsNotEmpty()
  @IsString()
  user_id: string;
  @IsNotEmpty()
  @IsString()
  icon_url: string;
}
