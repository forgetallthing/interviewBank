import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { QuestionModule } from './question/question.module';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from './common/common';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { ReqMiddleware } from './middleware/req.middleware';
import { AppController } from './app.controller';

@Module({
  imports: [MongooseModule.forRoot(config.mongoUri), QuestionModule],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('question');
    consumer.apply(ReqMiddleware).forRoutes('question');
  }
}
