import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { renderFile } from 'ejs';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'), { prefix: '/static/' });
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.engine('html', renderFile);
  app.set('view engine', 'html');

  await app.listen(80);
}
bootstrap();
