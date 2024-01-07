import { productMock } from '../../product/__mocks__/product.mock';
import { UpdateCartDto } from '../dtos/update-cart.dto';

export const updateCartMock: UpdateCartDto = {
  amount: 77,
  productId: productMock.id,
};
