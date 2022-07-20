import { ICreateRestaurantDTO } from "../dtos/ICreateRestaurantDTO"
import { Restaurant } from "../infra/typeorm/entities/Restaurant";


interface IRestaurantsRepository {
  create(data: ICreateRestaurantDTO): Promise<void>;
  findById(id: string): Promise<Restaurant>;
  findByName(name: string): Promise<Restaurant>;
  findByUser(user_id: string): Promise<Restaurant[]>;
}

export { IRestaurantsRepository }