import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { Request } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  // app.enableCors({
  //   credentials: true,
  //   origin: ['http://localhost:3000'],
  // });
  await app.listen(3005);
}
bootstrap();
