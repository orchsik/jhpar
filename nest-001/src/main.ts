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

/**
 * NsetJS는 Express, Fastify 위에서 돌아가기 때문에
 * 필요하면 Express의 request, response 객체를 사용할 수있다. (@Req() req, @Res() res)
 * 그러나 그낭하면 사용하지 않는게 좋다.
 * 왜? Fastify 가 2배정도 더 빨라서 성능이 떨어진다.
 */
