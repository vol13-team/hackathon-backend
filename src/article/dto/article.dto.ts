import { IsNotEmpty, IsString } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  articleTitle: string;

  @IsString()
  @IsNotEmpty()
  articleLink: string;

  @IsString()
  articleUserName: string;
}

export class UpdateArticleDto {
  @IsString()
  @IsNotEmpty()
  articleTitle: string;

  @IsString()
  @IsNotEmpty()
  articleLink: string;

  @IsString()
  articleUserName: string;
}

export class DelateArticleDto {
  @IsString()
  @IsNotEmpty()
  articleID: string;
}
