import { productMock } from '../../product/__mock__/product.mock';
import { InsertCartDto } from '../dtos/insert-cart.dto';

export const insertCartMock: InsertCartDto = {
  amount: 77,
  productId: productMock.id,
};
