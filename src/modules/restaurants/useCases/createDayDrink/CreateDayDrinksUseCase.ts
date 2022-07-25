import { IDayDrinksRepository } from "@modules/restaurants/repositories/IDayDrinksRepository";
import { IRestaurantsRepository } from "@modules/restaurants/repositories/IRestaurantsRepository";
import { inject, injectable } from "tsyringe";


interface IRequest {
  description: string;
  restaurant: string;
}

interface IResponse {
  dayDrink: {
    name: string;
  };
  restaurant: {
    name: string;
  }
}

@injectable()
class CreateDayDrinkUseCase {
  constructor(
    @inject("RestaurantsRepository")
    private restaurantsRepository: IRestaurantsRepository,
    @inject("DayDrinksRepository")
    private dayDrinksRepository: IDayDrinksRepository
  ){}

  async execute({
    description, 
    restaurant
  }: IRequest): Promise<IResponse>{

    const restaurantExist = await this.restaurantsRepository.findByName(restaurant);

    await this.dayDrinksRepository.create({
      description,
      restaurant_id: restaurantExist.id
    });

    const dayDrinkReturn: IResponse = {
      dayDrink: {
        name: description
      }, 
      restaurant: {
        name: restaurant
      }
    }
    return dayDrinkReturn;
    
  }

}
export { CreateDayDrinkUseCase }