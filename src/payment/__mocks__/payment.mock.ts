import { PaymentType } from "../../payment-status/enums/payment-type.enum";
import { PaymentEntity } from "../entities/payment.entity";

export const paymentMock: PaymentEntity = {
    createdAt: new Date(),
    updatedAt: new Date(),
    discount: 432,
    finalPrice: 7777,
    id: 77,
    price: 3777,
    statusId: PaymentType.Done,
    type: '',
}