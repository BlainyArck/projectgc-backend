import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNumber()
  categoryId: number;

  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  image: string;
  
  @IsNumber()
  weight?: number;

  @IsNumber()
  length?: number;
  
  @IsNumber()
  height?: number;
  
  @IsNumber()
  width?: number;
  
  @IsNumber()
  diameter?: number;
}
