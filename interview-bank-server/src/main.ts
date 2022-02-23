import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { renderFile } from 'ejs';
import * as compression from 'compression';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(compression());
  app.useStaticAssets(join(__dirname, '..', 'views'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.engine('html', renderFile);
  app.set('view engine', 'html');

  await app.listen(80);
}
bootstrap();
