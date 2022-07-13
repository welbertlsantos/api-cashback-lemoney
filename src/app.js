import express from "express";
import cors from "cors";

const getApp = () => {

    const app = express();
    const router = express.Router();

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    
    app.use(`${process.env.CONS_APP_PATH}/health`);
    app.use(`${process.env.CONS_APP_PATH}/program-cashback`);

    app.use(`${process.env.CONS_APP_PATH}`, router);

    return app;

};

export default getApp;