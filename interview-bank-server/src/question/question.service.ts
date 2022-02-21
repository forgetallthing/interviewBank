import { Injectable } from '@nestjs/common';
import { questionClass, question } from './mock/question.mock';

@Injectable()
export class QuestionService {
  getClass() {
    return questionClass;
  }
  getQuestion() {
    return question;
  }
}
