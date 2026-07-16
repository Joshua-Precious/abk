import { Request, Response } from 'express';
import * as service from './registration.service.js';

export const register = async (req: Request, res: Response) => {
  try {
    const { 
      teamName, 
      numberOfPeople, 
      ageRange, 
      briefDescription, 
      fullName, 
      phoneNumber, 
      email, 
      city 
    } = req.body;

    // Basic validation
    if (!teamName || !numberOfPeople || !ageRange || !fullName || !phoneNumber || !email || !city) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const registration = await service.registerTeam({
      teamName,
      numberOfPeople: parseInt(numberOfPeople, 10),
      ageRange,
      briefDescription,
      fullName,
      phoneNumber,
      email,
      city
    });

    return res.status(201).json({
      message: 'Registration successful',
      data: registration
    });
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getAllRegistrations = async (req: Request, res: Response) => {
  try {
    const registrations = await service.getAllRegistrations();
    return res.status(200).json({ data: registrations });
  } catch (error) {
    console.error('Error fetching registrations:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
