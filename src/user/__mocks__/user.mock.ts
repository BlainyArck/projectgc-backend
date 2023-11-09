import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  cpf: '00000000000',
  createdAt: new Date(),
  email: 'root@root.com',
  id: 555777,
  name: 'nameMock',
  password: '$2b$10$7FPH4inoOZvfsXR1.vsK9u5/MA5lpnGFtkbpZ84EYTH7jf2uMQ3k.',
  phone: '999999999',
  typeUser: UserType.User,
  updatedAt: new Date(),
};
