import { IsNotEmpty, IsString } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  article_title: string;

  @IsString()
  @IsNotEmpty()
  article_link: string;

  @IsString()
  article_user_name: string;
}

export class UpdateArticleDto {
  @IsString()
  @IsNotEmpty()
  article_title: string;

  @IsString()
  @IsNotEmpty()
  article_link: string;

  @IsString()
  article_user_name: string;
}
