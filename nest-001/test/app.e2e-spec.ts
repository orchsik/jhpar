import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  // beforeEach: 각 테스트마다 애플리케이션을 새로 만들어서 사용하고 있다.
  // beforeAll: 모든 테스트 전에 한번만 애플리케이션을 만들어서 사용(데이터 공유)
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    // 리얼 애플리케이션과 동일한 옵션 적용
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true, // decorate 에 없는 파라미터는 걸러버림
        forbidNonWhitelisted: true, // docorate에 없는 파라미터가 있으면 요청 자체를 막아버림 (400 ERROR)
        transform: true, // 요청으로 들어온 타입을 우리가 원하는 타입으로 바꿀 수 있게 설정.
      })
    );
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer()).get('/').expect(200).expect('Hello here is Nest Project');
  });

  describe('/movies', () => {
    it('GET 200', () => {
      return request(app.getHttpServer()).get('/movies').expect(200).expect([]);
    });

    it('POST 201', () => {
      return request(app.getHttpServer())
        .post('/movies')
        .send({ title: 'test movie', year: 2000, genres: ['test'] })
        .expect(201);
    });

    it('POST 400', () => {
      return request(app.getHttpServer())
        .post('/movies/')
        .send({ title: 'test movie', year: 2000, genres: ['test'], hacked: true })
        .expect(400);
    });

    it('GET 404', () => {
      return request(app.getHttpServer()).put('/movies').expect(404);
    });
  });

  describe('/movies/:id', () => {
    it('GET 200', () => {
      return request(app.getHttpServer()).get('/movies/0').expect(200);
    });

    it('GET 404', () => {
      return request(app.getHttpServer()).get('/movies/999').expect(404);
    });

    it('PATCH 200', () => {
      return request(app.getHttpServer()).patch('/movies/0').send({ title: 'updated movie' }).expect(200);
    });

    it('DELETE 200', () => {
      return request(app.getHttpServer()).delete('/movies/0').expect(200);
    });
  });
});
