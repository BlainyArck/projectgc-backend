import { ReturnPaymentDto } from "../../payment/dtos/return-payment.dto";
import { ReturnAddressDto } from "../../address/dtos/returnAddress.dto";
import { ReturnUserDto } from "../../user/dtos/returnUser.dto";
import { OrderEntity } from "../entities/order.entity";
import { ReturnOrderProductDto } from "../../order-product/dtos/return-order-product.dto";

export class ReturnOrderDto {
    id: number;
    date: string;
    userId: number;
    addressId: number;
    paymentId: number;
    user?: ReturnUserDto;
    address?: ReturnAddressDto;
    payment?: ReturnPaymentDto;
    ordersProduct?: ReturnOrderProductDto[];
    amountProducts?: number;

    constructor(order: OrderEntity) {
        this.id = order.id;
        this.date = order.date.toString();
        this.userId = order.userId;
        this.addressId = order.addressId;
        this.paymentId = order.paymentId;
        this.user = order.user ? new ReturnUserDto(order.user) : undefined;
        this.address = order.address ? new ReturnAddressDto(order.address) : undefined;
        this.payment = order.payment ? new ReturnPaymentDto(order.payment) : undefined;
        this.ordersProduct = order.ordersProduct
            ? order.ordersProduct.map(
                (orderProduct) => new ReturnOrderProductDto(orderProduct),
            )
            : undefined;
        this.amountProducts = order.amountProducts;
    }
}