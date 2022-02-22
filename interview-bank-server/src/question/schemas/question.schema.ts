import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuestionDocument = Question & Document;

@Schema()
export class Question extends Document {
  @Prop()
  code: string;

  @Prop()
  question: string;

  @Prop()
  class: string;

  @Prop()
  level: number;

  @Prop()
  sort: number;

  @Prop()
  answer: string;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
