import { Module } from '@nestjs/common';
import { QuestionModule } from './question/question.module';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from './common';

@Module({
  imports: [MongooseModule.forRoot(config.mongoUri), QuestionModule],
})
export class AppModule {}
