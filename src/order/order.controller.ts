import {
  Body,
  Controller,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateOrderDto } from './dtos/create-order.dto';
import { OrderService } from './order.service';
import { UserId } from 'src/decorators/user-id.decorator';

@Controller('order')
export class OrderController {
  constructor(private readonly orderSevice: OrderService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createOrder(
    @Body() createOrderDto: CreateOrderDto,
    @Param('cartId') cartId: number,
    @UserId() userId: number,
  ) {
    return this.orderSevice.createOrder(createOrderDto, userId);
  }
}
