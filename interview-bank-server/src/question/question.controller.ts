import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionDto } from './dto/question.dto';
import { getRandomID } from '../common/utils';

@Controller('question')
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  // @Get('getClass')
  // getClass(): any {
  //   return this.questionService.getClass();
  // }

  @Post('saveQuestion')
  async saveQuestion(@Body() questionDto: QuestionDto) {
    if (!questionDto.code) questionDto.code = getRandomID();
    await this.questionService.save(questionDto);
    return { state: 'ok' };
  }

  @Post('delQuestion')
  async delQuestion(@Body() param: any) {
    if (!param.code) return { state: 'err', errmsg: '缺少参数code' };
    await this.questionService.delete(param.code);
    return { state: 'ok' };
  }

  @Get('getQuestion')
  async getQuestion(@Query() param: any): Promise<any> {
    param = { page: 0, count: 15, ...param };
    const list = await this.questionService.getQuestionList(param);
    return { state: 'ok', page: param.page, list };
  }

  @Get('getClass')
  async getClass(): Promise<any> {
    const list = await this.questionService.getClass();
    return { state: 'ok', list };
  }
}
