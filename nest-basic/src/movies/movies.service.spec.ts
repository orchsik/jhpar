import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  // beforEach, afterEach, beforeAll, afterAll 등등 ... 많음
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
    service.create({ title: 'Test Movie', genres: ['test1'], year: 2000 });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll()', () => {
    it('should return an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getOne', () => {
    it('should return a movie', () => {
      const movie = service.getOne(0);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(0);
    });

    it('should throw a new a NotFoundException', () => {
      try {
        service.getOne(999);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error.message).toEqual(`Movie with ID: 999 not found.`);
      }
    });
  });

  describe('deleteOne()', () => {
    it('deletes a movie', () => {
      const beforeDelete = service.getAll();
      service.deleteOne(0);
      const afterDelete = service.getAll();
      expect(afterDelete.length).toEqual(beforeDelete.length - 1);
      expect(afterDelete.length).toBeLessThan(beforeDelete.length);
    });

    it('should throw a new a NotFoundException', () => {
      try {
        service.deleteOne(999);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('create()', () => {
    it('should create a movie', () => {
      const beforeCreate = [...service.getAll()];
      service.create({ title: 'Test Movie2', genres: ['test2'], year: 2000 });
      const afterCreate = service.getAll();
      expect(afterCreate.length).toBeGreaterThan(beforeCreate.length);
    });
  });

  describe('patchOne()', () => {
    it('should update a movie', () => {
      service.patchOne(0, { title: 'Updated Test' });
      const movie = service.getOne(0);
      expect(movie.title).toEqual('Updated Test');
    });

    it('should throw a new a NotFoundException', () => {
      try {
        service.patchOne(999, {});
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('deleteAll()', () => {
    it('should delete all movies', () => {
      service.deleteAll();
      const movies = service.getAll();
      expect(movies.length).toEqual(0);
    });
  });
});
