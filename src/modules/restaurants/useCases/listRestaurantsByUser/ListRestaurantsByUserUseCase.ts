import { Restaurant } from "@modules/restaurants/infra/typeorm/entities/Restaurant";
import { IRestaurantsRepository } from "@modules/restaurants/repositories/IRestaurantsRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class ListRestaurantsByUserUseCase {

  constructor(
    @inject("RestaurantsRepository")
    private restaurantsRespository: IRestaurantsRepository
  ) {}

  async execute(user_id: string): Promise<Restaurant[]> {
    const restaurantsUser = await this.restaurantsRespository.findByUser(user_id);

    return restaurantsUser;
  }

}
export { ListRestaurantsByUserUseCase }