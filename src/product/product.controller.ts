import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
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
import { ReturnPriceDeliveryDto } from './dtos/return-price-delivery.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
 
  @Roles(UserType.Admin, UserType.Root, UserType.User)
  @Get()
  async findAll(): Promise<ReturnProductDto[]> {
    return (await this.productService.findAll([], true)).map(
      (product) => new ReturnProductDto(product),
    );
  }
 
  @Roles(UserType.Admin, UserType.Root, UserType.User)
  @Get('/page')
  async findAllPage(@Query('search') search: string): Promise<ReturnProductDto[]> {
    return (await this.productService.findAllPage(search)).map(
      (product) => new ReturnProductDto(product),
    );
  }
 
  @Roles(UserType.Admin, UserType.Root, UserType.User)
  @Get('/:productId')
  async findProductById(@Param('productId') productId): Promise<ReturnProductDto> {
    return new ReturnProductDto(
      await this.productService.findProductById(productId, true),
    );
  }

  @Roles(UserType.Admin, UserType.Root)
  @UsePipes(ValidationPipe)
  @Post()
  async createProduct(
    @Body() createProduct: CreateProductDto,
  ): Promise<ProductEntity> {
    return this.productService.createProduct(createProduct);
  }

  @Roles(UserType.Admin, UserType.Root)
  @Delete('/:productId')
  async deleteProduct(
    @Param('productId') productId: number,
  ): Promise<DeleteResult> {
    return this.productService.deleteProduct(productId);
  }

  @Roles(UserType.Admin, UserType.Root)
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
  ): Promise<ReturnPriceDeliveryDto> {
    return this.productService.findPriceDelivery(cep, idProduct);
  }
}
