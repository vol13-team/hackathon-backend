export class CreateAnswerDto {
  decision: boolean;
  select_option: string;
  user_id: string;
  answer_user_id: string;
}
export class VerifyingAnswerDto {
  select_option: string;
}
