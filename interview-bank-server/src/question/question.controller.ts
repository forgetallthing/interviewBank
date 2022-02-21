import { Controller, Get } from '@nestjs/common';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  @Get('getClass')
  getClass(): any {
    return this.questionService.getClass();
  }

  @Get('getQuestion')
  findClass(): any {
    return {
      count: 1,
      curPage: 1,
      list: this.questionService.getQuestion(),
    };
  }
}
