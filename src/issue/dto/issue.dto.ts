export class CreateIssueDto {
  IssueDetail: string;
  Visibility: boolean;
  explanation: string;
  ArticleID: string;
  PostUserID: string;
}
export class CreateOptionsDto {
  IssueID: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correctOption: string;
}
