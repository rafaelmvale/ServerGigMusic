import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListRestaurantsByUserUseCase } from "./ListRestaurantsByUserUseCase";


class ListRestaurantsByUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listRestaurantsByUserUseCase = container.resolve(
      ListRestaurantsByUserUseCase
    );

    const restaurants = await listRestaurantsByUserUseCase.execute(id);

    return response.json(restaurants);
  }
}

export { ListRestaurantsByUserController }