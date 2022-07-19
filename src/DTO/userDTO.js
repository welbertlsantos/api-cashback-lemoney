import md5 from "md5";

export default (body) => ({
  email: body.email,
  password: md5(body.password + process.env.CHAVE_PRIVADA)
});