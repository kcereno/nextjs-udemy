import { hash } from 'bcryptjs';

export const hashPassword = async (password: string) => {
  const hashedPass = await hash(password, 12);

  return hashPassword;
};
