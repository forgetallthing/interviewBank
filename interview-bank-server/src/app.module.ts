import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { QuestionModule } from './question/question.module';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from './common/common';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { ReqMiddleware } from './middleware/req.middleware';

@Module({
  imports: [MongooseModule.forRoot(config.mongoUri), QuestionModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('question');
    consumer.apply(ReqMiddleware).forRoutes('question');
  }
}
