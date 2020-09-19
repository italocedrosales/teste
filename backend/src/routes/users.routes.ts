import { Router } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';

import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.get('/', async (request, resposnse) => {
  const userRepository = getRepository(User);

  const users = await userRepository.find({
    select: ['id', 'name', 'lastname', 'email'],
  });

  return resposnse.json(users);
});

usersRouter.post('/', async (request, response) => {
  try {
    const { name, lastname, email, password } = request.body;

    const userService = new CreateUserService();

    const user = await userService.execute({
      name,
      lastname,
      email,
      password,
    });

    delete user.password;

    return response.json(user);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default usersRouter;
