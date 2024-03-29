import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateDayPlateUseCase } from "./CreateDayPlateUseCase";


class CreateDayPlateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description, restaurant} = request.body;

    const createDayPlateUseCase = container.resolve(CreateDayPlateUseCase);

    const dayplate= await createDayPlateUseCase.execute({
      description, restaurant
    });

    return response.json(dayplate);
  }
}

export { CreateDayPlateController }