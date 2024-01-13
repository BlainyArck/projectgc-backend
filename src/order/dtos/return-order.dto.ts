import { ReturnPaymentDto } from "../../payment/dtos/return-payment.dto";
import { ReturnAddressDto } from "../../address/dtos/returnAddress.dto";
import { ReturnUserDto } from "../../user/dtos/returnUser.dto";
import { OrderEntity } from "../entities/order.entity";
import { OrderProductEntity } from "../../order-product/entities/order-product.entity";

export class ReturnOrderDto {
    id: number;
    date: string;
    user?: ReturnUserDto;
    address?: ReturnAddressDto;
    payment?: ReturnPaymentDto;
    ordersProduct?: OrderProductEntity[];

    constructor(order: OrderEntity) {
        this.id = order.id;
        this.date = order.date.toString();
        this.user = order.user ? new ReturnUserDto(order.user) : undefined;
        this.address = order.address ? new ReturnAddressDto(order.address) : undefined;
        this.payment = order.payment ? new ReturnPaymentDto(order.payment) : undefined;
        this.ordersProduct = order.ordersProduct;
    }
}