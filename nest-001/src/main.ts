import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // decorate 에 없는 파라미터는 걸러버림
      forbidNonWhitelisted: true, // docorate에 없는 파라미터가 있으면 요청 자체를 막아버림 (400 ERROR)
      transform: true, // 요청으로 들어온 타입을 우리가 원하는 타입으로 바꿀 수 있게 설정.
    })
  );
  await app.listen(3000);
}
bootstrap();
