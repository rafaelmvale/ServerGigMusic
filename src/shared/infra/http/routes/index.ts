import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { usersRoutes } from "./users.routes";
import { restaurantsRoutes } from "./restaurants.routes";
import { passwordRoutes } from "./password.routes";
import { repertoriesRoutes } from "./repertories.routes";
import { musicianRoutes } from "./musician.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/password", passwordRoutes);
router.use("/restaurants", restaurantsRoutes);
router.use("/repertories", repertoriesRoutes);
router.use("/musician", musicianRoutes);
router.use(authenticateRoutes);

export { router };