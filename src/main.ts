import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';

async function bootstrap() {
  Logger.log('BOOTSTRAP: start', 'Bootstrap');

  const app = await NestFactory.create(AppModule);
  Logger.log('BOOTSTRAP: after create()', 'Bootstrap');

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
  Logger.log('BOOTSTRAP: after pipes', 'Bootstrap');

  const port = Number(process.env.PORT) || 3000;
  Logger.log(`BOOTSTRAP: before listen ${port}`, 'Bootstrap');

  await app.listen(port, '0.0.0.0');

  Logger.log(`🚀 API running on http://localhost:${port}`, 'Bootstrap');
}
bootstrap();
