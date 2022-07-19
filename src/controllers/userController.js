import { log, generateErrorObject, generateToken } from '../utils/utils.js'
import md5 from 'md5';


import userService from '../services/userService.js';

import userDTO from '../DTO/userDTO.js'

const authenticate = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await userService().authenticate({
      email: email,
      password: md5(password + process.env.CHAVE_PRIVADA)
    });

    if (!userFound) throw generateErrorObject(`${process.env.SERVICE_NAME}/invalid-user`);

    /* gerando token de acesso */

    const token = await generateToken({
      id: userFound.id,
      email: userFound.email
    });

    res.status(200).send({ token: token, user: { email: userFound.email} });
  } catch (error) {
    log.error('Error: ', error.message);
    const e = getError(req, error);
    return res.status(e.status).json(e);
  }
}

const createUser = async (req, res) => {
  try {
    const newUser = await userService().createUser(userDTO(req.body));
    res.status(201).send({ Message: 'User created successfully.', user: newUser });
  } catch (error) {
    log.error('Error: ', error.message);
    const e = getError(req, error);
    return res.status(e.status).json(e);
  }
}

const findUserById = async (req, res) => {
  try {
    const { id }  = req.params;
    const user = await userService().findUserById(id);
    res.status(200).send({user: { id: user._id, email: user.email }} );
  } catch (error) {
    log.error('Error: ', error.message);
    const e = getError(req, error);
    return res.status(e.status).json(e);
  }
}

export {
  authenticate,
  createUser,
  findUserById,
}