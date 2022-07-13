import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";

import { IRestaurantsRepository } from "@modules/restaurants/repositories/IRestaurantsRepository";
import { ICreateRestaurantDTO } from "@modules/restaurants/dtos/ICreateRestaurantDTO";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateRestaurantUseCase {
  constructor(
    @inject("RestaurantsRepository")
    private RestaurantsRepository: IRestaurantsRepository
  ){}
  async execute({
    name,
    address,
    email,
    whatsapp,
    type
  }: ICreateRestaurantDTO): Promise<void> {

    const restaurantsAlreadyExists = await this.RestaurantsRepository.findByName(name);

    if(restaurantsAlreadyExists){
      throw new AppError("Restaurant Already Exists!");
    }
    
    await this.RestaurantsRepository.create({
      name, 
      address,
      email,
      whatsapp, 
      type
    });
  }

}
export { CreateRestaurantUseCase }