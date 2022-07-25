import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateDayDrinkUseCase } from "./CreateDayDrinksUseCase";


class CreateDayDrinkController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description, restaurant} = request.body;

    const createDayDrinkUseCase = container.resolve(CreateDayDrinkUseCase);

    const DayDrink= await createDayDrinkUseCase.execute({
      description, restaurant
    });

    return response.json(DayDrink);
  }
}

export { CreateDayDrinkController }