
import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListSchedulesByUserUseCase } from "./ListSchedulesByUserUseCase";


class ListSchedulesByUserController { 
  async handle(request: Request, response: Response): Promise<Response>{
    const { restaurant_id, musician_id } = request.body;

    const listSchedulesByUserUseCase = container.resolve(ListSchedulesByUserUseCase);

    const schedule = await listSchedulesByUserUseCase.execute({
      restaurant_id,
      musician_id
    });

    return response.status(200).json(schedule);

  }
}
export { ListSchedulesByUserController }