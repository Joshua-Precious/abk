import * as repository from './registration.repository.js';
import { sendRegistrationEmail } from '../../lib/email.js';
import { Prisma } from '../../generated/prisma/client.js';

export const registerTeam = async (data: Prisma.RegistrationCreateInput) => {
  // Save to database
  const registration = await repository.createRegistration(data);
  
  // Send email asynchronously without blocking the response
  sendRegistrationEmail(data.email, data.fullName, data.teamName);
  
  return registration;
};
