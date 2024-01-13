import { IsNotEmpty, IsString } from 'class-validator';

export class CreateIssueDto {
  @IsNotEmpty()
  @IsString()
  issueName: string;
  @IsNotEmpty()
  @IsString()
  issueDetail: string;
  @IsNotEmpty()
  @IsString()
  visibility: boolean;
  @IsNotEmpty()
  @IsString()
  explanation: string;
  @IsNotEmpty()
  @IsString()
  postUserID: string;
}
export class CreateOptionsDto {
  @IsNotEmpty()
  @IsString()
  IssueID: string;
  @IsNotEmpty()
  @IsString()
  option1: string;
  @IsNotEmpty()
  @IsString()
  option2: string;
  @IsNotEmpty()
  @IsString()
  option3: string;
  @IsNotEmpty()
  @IsString()
  option4: string;
  @IsNotEmpty()
  @IsString()
  correctOption: string;
}

//http://localhost:3000/isue/df12fff7-4187-4084-b40e-5cd3a1f6b764
