import { IDayPlatesRepository } from "@modules/restaurants/repositories/IDayPlateRepository";
import { IRestaurantsRepository } from "@modules/restaurants/repositories/IRestaurantsRepository";
import { inject, injectable } from "tsyringe";


interface IRequest {
  description: string;
  restaurant: string;
}

interface IResponse {
  dayplate: {
    name: string;
  };
  restaurant: {
    name: string;
  }
}

@injectable()
class CreateDayPlateUseCase {
  constructor(
    @inject("RestaurantsRepository")
    private restaurantsRepository: IRestaurantsRepository,
    @inject("DayPlatesRepository")
    private dayplatesRepository: IDayPlatesRepository
  ){}

  async execute({
    description, 
    restaurant
  }: IRequest): Promise<IResponse>{

    const restaurantExist = await this.restaurantsRepository.findByName(restaurant);

    await this.dayplatesRepository.create({
      description,
      restaurant_id: restaurantExist.id
    });

    const dayplateReturn: IResponse = {
      dayplate: {
        name: description
      }, 
      restaurant: {
        name: restaurant
      }
    }
    return dayplateReturn;
    
  }

}
export { CreateDayPlateUseCase }