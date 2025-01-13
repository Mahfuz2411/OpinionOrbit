import { Request, Response } from 'express';
import userServices from './user.service';

// Controller for creating a new user
const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const newUser = await userServices.createUserService(userData);

    res.status(201).json({
      message: 'User created successfully',
      user: newUser,
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'Error creating user',
      error: error.message,
    });
  }
};

const userControllers = {
  createUser,
}

export default userControllers;
