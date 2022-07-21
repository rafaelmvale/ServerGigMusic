import { IDayPlatesRepository } from "@modules/restaurants/repositories/IDayPlateRepository";
import { IRestaurantsRepository } from "@modules/restaurants/repositories/IRestaurantsRepository";
import { inject, injectable } from "tsyringe";


interface IRequest {
  name: string;
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

  async create({
    name, 
    restaurant
  }: IRequest): Promise<IResponse>{

    const restaurantExist = await this.restaurantsRepository.findByName(restaurant);

    await this.dayplatesRepository.create({
      name,
      restaurant_id: restaurantExist.id
    });

    const dayplateReturn: IResponse = {
      dayplate: {
        name
      }, 
      restaurant: {
        name
      }
    }
    return dayplateReturn;
    
  }

}
export { CreateDayPlateUseCase }