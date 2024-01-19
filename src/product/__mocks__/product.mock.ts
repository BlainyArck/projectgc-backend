import { categoryMock } from '../../category/__mocks__/category.mock';
import { ProductEntity } from '../entities/product.entity';

export const productMock: ProductEntity = {
  categoryId: categoryMock.id,
  createdAt: new Date(),
  id: 777,
  image: 'http://image.com',
  name: 'gol',
  price: 77.7,
  updatedAt: new Date(),
  diameter: 0,
  height: 0,
  length: 0,
  weight: 0,
  width: 0,
};
