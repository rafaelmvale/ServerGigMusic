import { ResetPasswordUserController } from "@modules/accounts/useCases/resetPasswordUser/ResetPasswordUserController";
import { Router } from "express";


const passwordRoutes = Router();

const resetPasswordController = new ResetPasswordUserController();

passwordRoutes.post("/reset", resetPasswordController.handle);

export { passwordRoutes }