import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,POST,DELETE,OPTIONS',
    credentials: true,
  });
  await app.listen(5000);
}
bootstrap().then(() => {
  // Add your code here if needed
});
