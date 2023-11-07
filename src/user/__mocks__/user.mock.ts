import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  cpf: '00000000000',
  createdAt: new Date(),
  email: 'test@test.com',
  id: 555777,
  name: 'nameMock',
  password: 'largePassword',
  phone: '999999999',
  typeUser: UserType.User,
  updatedAt: new Date(),
};
