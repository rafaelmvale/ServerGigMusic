import { Restaurant } from "@modules/restaurants/infra/typeorm/entities/Restaurant";
import { IRestaurantsRepository } from "@modules/restaurants/repositories/IRestaurantsRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class ListRestaurantsByUserUseCase {

  constructor(
    @inject("RestaurantsRepository")
    private restaurantsRespository: IRestaurantsRepository
  ) {}

  async execute(): Promise<Restaurant[]> {
    const restaurantsUser = await this.restaurantsRespository.list();

    return restaurantsUser;
  }

}
export { ListRestaurantsByUserUseCase }