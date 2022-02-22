import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Question, QuestionDocument } from './schemas/question.schema';
import { QuestionDto } from './dto/question.dto';

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel('Question') private questionModel: Model<QuestionDocument>,
  ) {}

  async save(questionDto: QuestionDto): Promise<any> {
    const result = this.questionModel.updateOne(
      { code: questionDto.code },
      questionDto,
      { upsert: true },
    );
    return result;
  }

  async delete(code: string): Promise<any> {
    const result = await this.questionModel.deleteOne({ code });
    return result;
  }

  async getQuestionList(param): Promise<Question[]> {
    const filter: any = {};
    if (param.search) filter.question = new RegExp(param.search);
    if (param.class) filter.class = { $in: param.class };
    return this.questionModel
      .find(
        filter,
        { _id: 0, __v: 0 },
        { skip: param.page * param.count, sort: { sort: 1 } },
      )
      .exec();
  }

  // getClass() {
  //   return questionClass;
  // }
  // getQuestion() {
  //   return question;
  // }
}
