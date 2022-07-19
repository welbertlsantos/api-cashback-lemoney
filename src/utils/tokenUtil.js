import jwt from "jsonwebtoken";
import { log } from './utils.js'

const generateToken = async (user) => {
  try {
    const token = await jwt.sign(user, process.env.CHAVE_PRIVADA, { expiresIn : '3d'});
    return token;
  } catch (error) {
    log.error('Error', error);
    throw error;
  }
};

const decodeToken = async (token) => {
  try {
    const tokenDecode = await jwt.verify(token, process.env.CHAVE_PRIVADA);
    return tokenDecode;
  } catch (error) {
    log.error('Error', error);
    throw error;
  }
}


export {
  generateToken,
  decodeToken,
}