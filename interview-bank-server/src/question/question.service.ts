import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Question, QuestionDocument } from './schemas/question.schema';
import { Class, ClassDocument } from './schemas/class.schema';
import { QuestionDto } from './dto/question.dto';

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel('Question') private questionModel: Model<QuestionDocument>,
    @InjectModel('Class') private classModel: Model<ClassDocument>,
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
    if (param.class && param.class.length > 0)
      filter.class = { $in: param.class };
    return this.questionModel
      .find(
        filter,
        { _id: 0, __v: 0 },
        { skip: param.page * param.count, sort: { sort: 1 } },
      )
      .exec();
  }

  async getClass(): Promise<Class[]> {
    return this.classModel
      .find({}, { _id: 0, __v: 0 }, { sort: { sort: 1 } })
      .exec();
  }
}
