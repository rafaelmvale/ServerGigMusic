import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateRestaurantUseCase } from "./CreateRestaurantUseCase";



class CreateRestaurantController {
  async handle(request: Request, response: Response): Promise<Response>{
    const { 
      name, 
      address, 
      email, 
      whatsapp, 
      type
    } = request.body;
    const createRestaurantUseCase = container.resolve(CreateRestaurantUseCase);

    await createRestaurantUseCase.execute({
      name,
      address,
      email, 
      whatsapp,
      type
    });

    return response.status(201).send();
  }
}
export { CreateRestaurantController }