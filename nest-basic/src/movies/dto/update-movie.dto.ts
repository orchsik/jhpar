import { IsString, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

// @nestjs/mapped-types: 기존 타입을 가지고 변형해서 사용할 수 있게 해줌
// PartialType: returns a type (class) with all the properties of the input type set to optional
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}

// export class UpdateMovieDto {
//   @IsString()
//   readonly title?: string;

//   @IsNumber()
//   readonly year?: number;

//   @IsString({ each: true })
//   readonly genres?: string[];
// }
