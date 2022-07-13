import { ICreateRestaurantDTO } from "@modules/restaurants/dtos/ICreateRestaurantDTO";
import { Restaurant } from "../entities/Restaurant";
import { IRestaurantsRepository } from "@modules/restaurants/repositories/IRestaurantsRepository";
import { getRepository, Repository } from "typeorm";



class RestaurantsRepository implements IRestaurantsRepository {
  private repository: Repository<Restaurant>;

  constructor() {
    this.repository = getRepository(Restaurant);
  }

  async create({
    name,
    address,
    email,
    whatsapp,
    type,
    id
  }: ICreateRestaurantDTO): Promise<void> {
    const restaurant = this.repository.create({
      name,
      address, 
      email, 
      whatsapp, 
      type,
      id
    });

    await this.repository.save(restaurant);
  }
  findById(id: string): Promise<Restaurant> {
    const restaurant = this.repository.findOne(id);
    return restaurant;
  }
  findByName(name: string): Promise<Restaurant> {
    const restaurant = this.repository.findOne({name});

    return restaurant;
  }

}

export { RestaurantsRepository }