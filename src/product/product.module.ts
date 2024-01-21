import { Module, forwardRef } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { CategoryModule } from '../category/category.module';
import { CorreiosModule } from '../correios/correios.module';

@Module({
  imports: [
    CorreiosModule,
    TypeOrmModule.forFeature([ProductEntity]),
  forwardRef(() => CategoryModule)],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
