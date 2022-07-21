import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateDayDrinkUseCase } from "./CreateDayDrinksUseCase";


class CreateDayDrinkController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, restaurant} = request.body;

    const createDayDrinkUseCase = container.resolve(CreateDayDrinkUseCase);

    const DayDrink= await createDayDrinkUseCase.create({
      name, restaurant
    });

    return response.json(DayDrink);
  }
}

export { CreateDayDrinkController }