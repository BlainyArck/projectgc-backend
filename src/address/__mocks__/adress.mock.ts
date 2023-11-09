import { cityMock } from '../../city/__mocks__/city.mock';
import { AddressEntity } from '../entities/address.entity';
import { userEntityMock } from '../../user/__mocks__/user.mock';

export const addressMock: AddressEntity = {
  cep: '7277777',
  cityId: cityMock.id,
  complement: 'av 7 q 7',
  createdAt: new Date(),
  id: 777777,
  numberAddress: 777,
  updatedAt: new Date(),
  userId: userEntityMock.id,
};
