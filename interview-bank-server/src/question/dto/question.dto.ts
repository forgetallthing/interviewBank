export class QuestionDto {
  key: string;
  code: string;
  readonly question: string;
  readonly class: string;
  level: number;
  sort: number;
  readonly answer: string;
}
