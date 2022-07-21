import { ICreateDayDrinkDTO } from "../dtos/ICreateDayDrinkDTO"
import { DayDrink } from "../infra/typeorm/entities/DayDrink"


interface IDayDrinksRepository {
  create({name, restaurant_id}: ICreateDayDrinkDTO): Promise<DayDrink>
  findById(id: string): Promise<DayDrink>;
  findByRestaurant(restaurant_id: string): Promise<DayDrink>;
  findByName(name: string): Promise<DayDrink>;
}

export { IDayDrinksRepository}