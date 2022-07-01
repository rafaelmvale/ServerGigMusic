import "reflect-metadata";
import express from "express";
import createConnection from "../../../database/index";


import "../../container";


import { router } from '../http/routes';

createConnection();
const app = express();


app.use(express.json());


app.use(router)


export { app }