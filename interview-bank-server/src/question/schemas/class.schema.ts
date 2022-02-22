import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClassDocument = Class & Document;

@Schema()
export class Class extends Document {
  @Prop()
  code: string;

  @Prop()
  label: string;

  @Prop()
  father: string;

  @Prop()
  sort: number;
}

export const ClassSchema = SchemaFactory.createForClass(Class);
