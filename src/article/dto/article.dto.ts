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

export class GetArticleDto {
  @IsString()
  @IsNotEmpty()
  articleId: string;
}
