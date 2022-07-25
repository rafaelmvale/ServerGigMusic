import { CreateSchedulesController } from "@modules/schedules/useCases/createSchedule/CreateSchedulesController";
import { ListSchedulesByUserController } from "@modules/schedules/useCases/listSchedulesByUserUseCase.ts/ListSchedulesByUserController";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";



const schedulesRoutes = Router();

const createSchedulesController = new CreateSchedulesController();
const listSchedulesByUserController = new ListSchedulesByUserController();

schedulesRoutes.post("/", ensureAuthenticated, createSchedulesController.handle);
schedulesRoutes.post("/list/", ensureAuthenticated, listSchedulesByUserController.handle);

export { schedulesRoutes }