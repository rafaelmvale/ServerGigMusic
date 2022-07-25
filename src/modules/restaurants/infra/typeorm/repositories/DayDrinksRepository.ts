import { ICreateDayDrinkDTO } from "@modules/restaurants/dtos/ICreateDayDrinkDTO";
import { IDayDrinksRepository } from "@modules/restaurants/repositories/IDayDrinksRepository";
import { getRepository, Repository } from "typeorm";
import { DayDrink } from "../entities/DayDrink";


class DayDrinksRepository implements IDayDrinksRepository {
  private repository: Repository<DayDrink>;

  constructor(){
    this.repository = getRepository(DayDrink);
  }

  async create({ description, restaurant_id, id }: ICreateDayDrinkDTO): Promise<DayDrink> {
    const DayDrink = this.repository.create({description, restaurant_id, id});

    await this.repository.save(DayDrink);

    return DayDrink;
  }
  async findById(id: string): Promise<DayDrink> {
    const DayDrink = await this.repository.findOne(id);

    return DayDrink;
  }
  
  async findByRestaurant(restaurant_id: string): Promise<DayDrink> {
    const DayDrink = await this.repository.findOne({
      where: {restaurant_id}
    });


    return DayDrink;
  }
  async findByName(description: string): Promise<DayDrink> {
    const DayDrink = await this.repository.findOne(description);

    return DayDrink;
  }

}

export { DayDrinksRepository }