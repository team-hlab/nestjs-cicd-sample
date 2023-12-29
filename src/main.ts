import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import moment from 'moment-timezone';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // timezone to KST
  moment.tz.setDefault('Asia/Seoul')

  await app.listen(3000);
}
bootstrap();
