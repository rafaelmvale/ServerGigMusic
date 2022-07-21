import { ICreateDayPlateDTO } from "../dtos/ICreateDayPlateDTO"
import { DayPlate } from "../infra/typeorm/entities/DayPlate"


interface IDayPlatesRepository {
  create({name, restaurant_id}: ICreateDayPlateDTO): Promise<DayPlate>
  findById(id: string): Promise<DayPlate>;
  findByRestaurant(restaurant_id: string): Promise<DayPlate>;
  findByName(name: string): Promise<DayPlate>;
}

export { IDayPlatesRepository}