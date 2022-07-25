import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSchedulesUseCase } from "./CreateSchedulesUseCase";

class CreateSchedulesController {
 async handle(request: Request, response: Response): Promise<Response> {
  const { schedule_date, musician_id } = request.body;
  const { id } = request.user;

  const createSchedulesUseCase = container.resolve(CreateSchedulesUseCase);

  const schedule = await createSchedulesUseCase.execute({
    musician_id, 
    schedule_date, 
  });

  return response.status(201).json(schedule);
  
 }

}
export {  CreateSchedulesController }