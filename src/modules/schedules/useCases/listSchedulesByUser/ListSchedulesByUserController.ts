
import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListSchedulesByUserUseCase } from "./ListSchedulesByUserUseCase";


class ListSchedulesByUserController { 
  async handle(request: Request, response: Response): Promise<Response>{
    const { id: user_id } = request.user;
    const { restaurant_id } = request.params;

    const listSchedulesByUserUseCase = container.resolve(ListSchedulesByUserUseCase);

    const schedule = await listSchedulesByUserUseCase.execute({
      restaurant_id,
      user_id,
    });

    return response.status(200).json(schedule);

  }
}
export { ListSchedulesByUserController }