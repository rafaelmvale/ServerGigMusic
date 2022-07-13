import { CreateRestaurantController } from "@modules/restaurants/useCases/createRestaurant/CreateRestaurantController";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


const restaurantsRoutes = Router();

const createRestaurantsController = new CreateRestaurantController();

restaurantsRoutes.post("/",ensureAuthenticated, createRestaurantsController.handle);

export { restaurantsRoutes }