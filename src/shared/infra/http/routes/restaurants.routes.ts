import { CreateRestaurantController } from "@modules/restaurants/useCases/createRestaurant/CreateRestaurantController";
import { ListRestaurantsByUserController } from "@modules/restaurants/useCases/listRestaurantsByUser/ListRestaurantsByUserController";
import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const restaurantsRoutes = Router();

const createRestaurantsController = new CreateRestaurantController();
const listRestaurantsByUserController = new ListRestaurantsByUserController();

restaurantsRoutes.post("/",ensureAuthenticated, createRestaurantsController.handle);

restaurantsRoutes.get("/user", ensureAuthenticated, listRestaurantsByUserController.handle);

export { restaurantsRoutes }