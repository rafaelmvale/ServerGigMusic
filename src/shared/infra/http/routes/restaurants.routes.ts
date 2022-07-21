import { CreateDayDrinkController } from "@modules/restaurants/useCases/createDayDrink/CreateDayDrinksController";
import { CreateDayPlateController } from "@modules/restaurants/useCases/createDayPLate/CreateDayPlateController";
import { CreateRestaurantController } from "@modules/restaurants/useCases/createRestaurant/CreateRestaurantController";
import { ListRestaurantsByUserController } from "@modules/restaurants/useCases/listRestaurantsByUser/ListRestaurantsByUserController";
import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const restaurantsRoutes = Router();

const createRestaurantsController = new CreateRestaurantController();
const listRestaurantsByUserController = new ListRestaurantsByUserController();
const createDayPlatesController = new CreateDayPlateController();
const createDayDrinksController = new CreateDayDrinkController();

restaurantsRoutes.post("/",ensureAuthenticated, createRestaurantsController.handle);
restaurantsRoutes.post("/dayplate", ensureAuthenticated,createDayPlatesController.handle);
restaurantsRoutes.post("/daydrink", ensureAuthenticated,createDayDrinksController.handle);
restaurantsRoutes.get("/user", ensureAuthenticated, listRestaurantsByUserController.handle);

export { restaurantsRoutes }