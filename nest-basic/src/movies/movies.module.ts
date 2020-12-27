import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}

/**
 * MovieModule은
 * MovieController, MovieService만 가지고 있는게 정석
 */
