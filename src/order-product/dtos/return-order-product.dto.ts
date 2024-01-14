import { ReturnOrderDto } from "../../order/dtos/return-order.dto";
import { ReturnProductDto } from "../../product/dtos/return-product.dto";
import { OrderProductEntity } from "../entities/order-product.entity";

export class ReturnOrderProductDto {
    id: number;
    orderId: number;
    productId: number;
    amount: number;
    price: number;
    order?: ReturnOrderDto;
    product?: ReturnProductDto;

    constructor(orderProduct: OrderProductEntity) {
        this.id = orderProduct.id;
        this.orderId = orderProduct.orderId;
        this.productId = orderProduct.productId;
        this.amount = orderProduct.amount;
        this.price = orderProduct.price;
        this.order = orderProduct.order
            ? new ReturnOrderDto(orderProduct.order)
            : undefined;
        this.product = orderProduct.product
            ? new ReturnProductDto(orderProduct.product)
            : undefined;
    }
}