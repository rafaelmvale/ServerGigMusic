import { CreateMusicianController } from "@modules/musician/useCases/createMusician/CreateMusicianController";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";





const musicianRoutes = Router();

const createMusicianController = new CreateMusicianController();

musicianRoutes.post("/", ensureAuthenticated, createMusicianController.handle);

export { musicianRoutes }