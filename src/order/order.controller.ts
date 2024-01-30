import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateOrderDto } from './dtos/create-order.dto';
import { OrderService } from './order.service';
import { UserId } from '../decorators/user-id.decorator';
import { OrderEntity } from './entities/order.entity';
import { Roles } from '../decorators/roles.decorator';
import { UserType } from '../user/enum/user-type.enum';
import { ReturnOrderDto } from './dtos/return-order.dto';

@Roles(UserType.Admin, UserType.Root, UserType.User)
@Controller('order')
export class OrderController {
  constructor(private readonly orderSevice: OrderService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createOrder(
    @Body() createOrderDto: CreateOrderDto,
    @UserId() userId: number,
  ): Promise<OrderEntity> {
    return this.orderSevice.createOrder(createOrderDto, userId);
  }

  @Get()
  async findOrdersByUserId(
    @UserId() userId: number,
    @Res({ passthrough: true }) res?: Response
    ): Promise<OrderEntity[]> {
    const orders = await this.orderSevice
      .findOrdersByUserId(userId)
      .catch(() => undefined);

      if(orders){
        return orders;
      }

    return ;
  }

  @Roles(UserType.Admin, UserType.Root)
  @Get('/all')
  async findAllOrders(): Promise<ReturnOrderDto[]> {
    return (await this.orderSevice.findAllOrders()).map(
      (order) => new ReturnOrderDto(order),
    );
  }

  @Roles(UserType.Admin, UserType.Root)
  @Get('/:orderId')
  async findOrderById(
    @Param('orderId') orderId: number): Promise<ReturnOrderDto> {
      return new ReturnOrderDto(
        (await this.orderSevice.findOrdersByUserId(undefined, orderId))[0],
      );
  }
}
