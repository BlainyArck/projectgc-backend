import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Roles } from '../decorators/roles.decorator';
import { UserType } from '../user/enum/user-type.enum';
import { ProductService } from './product.service';
import { ReturnProductDto } from './dtos/return-product.dto';
import { ProductEntity } from './entities/product.entity';
import { CreateProductDto } from './dtos/create-product.dto';
import { DeleteResult } from 'typeorm';
import { UpdateProductDto } from './dtos/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
 
  @Roles(UserType.Admin, UserType.User)
  @Get()
  async findAll(): Promise<ReturnProductDto[]> {
    return (await this.productService.findAll([], true)).map(
      (product) => new ReturnProductDto(product),
    );
  }

  @Roles(UserType.Admin)
  @UsePipes(ValidationPipe)
  @Post()
  async createProduct(
    @Body() createProduct: CreateProductDto,
  ): Promise<ProductEntity> {
    return this.productService.createProduct(createProduct);
  }

  @Roles(UserType.Admin)
  @Delete('/:productId')
  async deleteProduct(
    @Param('productId') productId: number,
  ): Promise<DeleteResult> {
    return this.productService.deleteProduct(productId);
  }

  @Roles(UserType.Admin)
  @UsePipes(ValidationPipe)
  @Put('/:productId')
  async updateProduct(
    @Body() updateProduct: UpdateProductDto,
    @Param('productId') productId: number,
  ): Promise<ProductEntity> {
    return this.productService.updateProduct(updateProduct, productId);
  }
  
  @Get('/:idProduct/delivery/:cep')
  async findPriceDelivery(
    @Param('idProduct') idProduct: number,
    @Param('cep') cep: string,
  ): Promise<any> {
    return this.productService.findPriceDelivery(cep, idProduct);
  }
}
