import { ICreateDayDrinkDTO } from "../dtos/ICreateDayDrinkDTO"
import { DayDrink } from "../infra/typeorm/entities/DayDrink"


interface IDayDrinksRepository {
  create({description, restaurant_id}: ICreateDayDrinkDTO): Promise<DayDrink>
  findById(id: string): Promise<DayDrink>;
  findByRestaurant(restaurant_id: string): Promise<DayDrink>;
  findByName(description: string): Promise<DayDrink>;
}

export { IDayDrinksRepository}