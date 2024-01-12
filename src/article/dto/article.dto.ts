import { IsNotEmpty, IsString } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  articleTitle: string;

  @IsString()
  @IsNotEmpty()
  articleLink: string;

  @IsString()
  articleThumbnail: string;
}

export class UpdateArticleDto {
  @IsString()
  @IsNotEmpty()
  articleTitle: string;

  @IsString()
  @IsNotEmpty()
  articleLink: string;

  @IsString()
  articleThumbnail: string;
}
