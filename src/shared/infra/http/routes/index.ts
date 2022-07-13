import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";

import { usersRoutes } from "./users.routes";
import { restaurantsRoutes } from "./restaurants.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use(authenticateRoutes);
router.use("/restaurants", restaurantsRoutes);

export { router };