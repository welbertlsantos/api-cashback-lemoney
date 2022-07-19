import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import healthRouter from '../src/routes/healthRouter.js';
import programRouter from '../src/routes/programRouter.js'
import userRouter from '../src/routes/userRouter.js'

const getApp = async () => {

    const app = express();

    /* iniciando a conexão com a base de dados */
    await mongoose.connect(process.env.CONS_CONEXAO);

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    
    app.use('/health', healthRouter());
    app.use('/program-cashback', programRouter());
    app.use('/user', userRouter());

    return app;

};

export default getApp;