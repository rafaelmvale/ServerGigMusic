import { CreateRepertoryController } from "@modules/musician/useCases/createRepertory/CreateRepertoryController";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";




const repertoriesRoutes = Router();

const createRepertoryController = new CreateRepertoryController();

repertoriesRoutes.post("/", ensureAuthenticated, createRepertoryController.handle);

export { repertoriesRoutes}