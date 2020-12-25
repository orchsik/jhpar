import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): CreateMovieDto[] {
    return this.movies;
  }

  getOne(id: number): CreateMovieDto {
    const target = this.movies.find((movie) => movie.id === id);
    if (target) {
      return target;
    } else {
      throw new NotFoundException(`Movie with ID: ${id} not found.`);
    }
  }

  create(data: CreateMovieDto) {
    if (Object.keys(data).length === 0) {
      return 'NODATA';
    } else {
      this.movies.push({ ...data, id: this.movies.length });
      return true;
    }
  }

  deleteOne(id: number) {
    const target = this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== id);
    return target;
  }

  deleteAll() {
    try {
      this.movies = [];
      return true;
    } catch (error) {
      return false;
    }
  }

  patchOne(id: number, data: UpdateMovieDto) {
    const target = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...target, ...data, id });
    return true;
  }
}
