import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

/**
 * AppModule은
 * AppController, AppService만 가지고 있는게 정석
 */
