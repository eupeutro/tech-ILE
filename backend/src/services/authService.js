import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const register = async ({ nome_usuario, email_usuario, senha_usuario, idade_usuario, contato_usuario }) => {
  const existingUser = await prisma.usuario.findUnique({ where: { email_usuario } });
  if (existingUser) throw new Error('Usuário já existe');

  const hashedPassword = await bcrypt.hash(senha_usuario, 10);
  const user = await prisma.usuario.create({
    data: {
      nome_usuario,
      email_usuario,
      senha_usuario: hashedPassword,
      idade_usuario: new Date(idade_usuario),
      contato_usuario
    }
  });

  return { message: 'Usuário registrado com sucesso!', user: { email: user.email_usuario } };
};