import { log } from '../utils/utils.js'

import userModel from '../model/userModel.js'
import { async } from 'regenerator-runtime';

export default () => {

  const createUser  = async (user) => {
    try {
      const newUser = await userModel.create(user);
      return newUser;
    } catch (error) {
      log.error('Error', error.message);
      throw error;
    }
  };

  const authenticate = async (data) => {
    try {
      const user = await userModel.findOne({
        email: data.email,
        password: data.password
      });
      return user;
    } catch (error) {
      log.error('Error', error.message);
      throw error;
    }
  }

  const findUserById = async (id) => {
    try {
      const user = await userModel.findById(id);
      return user;
    } catch (error) {
      log.error('Error', error.message);
      throw error;
    }
  }

  return {
    createUser,
    authenticate,
    findUserById,
  }
}