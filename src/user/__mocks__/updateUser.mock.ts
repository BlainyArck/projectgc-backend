import { UpdatePasswordDto } from '../dtos/update-password.dto';

export const updatePasswordMock: UpdatePasswordDto = {
  lastPassword: 'abc',
  newPassword: 'flajl',
};

export const updatePasswordInvalidMock: UpdatePasswordDto = {
  lastPassword: 'lajle',
  newPassword: 'pwwpu',
};
