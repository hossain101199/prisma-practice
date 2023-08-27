import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

const createUserInDB = async (data: User): Promise<User> => {
  const result = await prisma.user.create({ data });
  return result;
};

const getAllUsersFromDb = async (): Promise<User[]> => {
  const result = await prisma.user.findMany();
  return result;
};

const updateUserInDb = async (id: number, data: User): Promise<User> => {
  console.log(data);
  const result = await prisma.user.update({ where: { id }, data });
  return result;
};

const getSingleUserFromDb = async (id: number): Promise<User | null> => {
  const result = await prisma.user.findUnique({ where: { id } });
  return result;
};

export const userService = {
  createUserInDB,
  getAllUsersFromDb,
  updateUserInDb,
  getSingleUserFromDb,
};
