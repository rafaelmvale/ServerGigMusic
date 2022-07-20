import { Request, Response } from "express";
import { container } from "tsyringe";
import { RefreshTokenUseCase } from "./RefreshTokenUseCase";


class RefreshtokenController {
   async handle(request: Request, response: Response): Promise<Response>{
    const token = 
    request.body.token || 
    request.header["x-access-headers"] ||
    request.query.token;

    const refreshTokenUsecase = container.resolve(RefreshTokenUseCase);

    const refresh_token = await refreshTokenUsecase.execute(token);

    return response.json(refresh_token);
   }
}

export { RefreshtokenController }