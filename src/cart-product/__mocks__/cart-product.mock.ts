import { cartMock } from '../../cart/__mocks__/cart.mock';
import { CartProductEntity } from '../entities/cart-product.entity';
import { productMock } from '../../product/__mock__/product.mock';

export const cartProductMock: CartProductEntity = {
  amount: 77,
  cartId: cartMock.id,
  createdAt: new Date(),
  id: 777,
  productId: productMock.id,
  updatedAt: new Date(),
};
