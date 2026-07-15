import { prisma } from '../../lib/prisma.js';
import { Prisma } from '../../generated/prisma/client.js';

export const createRegistration = async (data: Prisma.RegistrationCreateInput) => {
  return await prisma.registration.create({
    data,
  });
};

export const getRegistrations = async () => {
  return await prisma.registration.findMany();
};
