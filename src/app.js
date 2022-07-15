import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import healthRouter from '../src/routes/healthRouter.js';
import programRouter from '../src/routes/programRouter.js'

const getApp = async () => {

    const app = express();
    const router = express.Router();

    /* iniciando a conexão com a base de dados */
    await mongoose.connect(process.env.CONS_CONEXAO);

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    
    app.use(`${process.env.CONS_APP_PATH}/health`, healthRouter());
    app.use(`${process.env.CONS_APP_PATH}/program-cashback`, programRouter());

    app.use(`${process.env.CONS_APP_PATH}`, router);

    return app;

};

export default getApp;