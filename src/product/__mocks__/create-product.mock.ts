import { categoryMock } from '../../category/__mocks__/category.mock';
import { CreateProductDto } from '../dtos/create-product.dto';

export const createProductMock: CreateProductDto = {
  categoryId: categoryMock.id,
  image: 'google.com',
  name: 'gol',
  price: 77.7,
};
