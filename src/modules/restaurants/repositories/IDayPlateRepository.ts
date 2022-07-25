import { ICreateDayPlateDTO } from "../dtos/ICreateDayPlateDTO"
import { DayPlate } from "../infra/typeorm/entities/DayPlate"


interface IDayPlatesRepository {
  create({description, restaurant_id}: ICreateDayPlateDTO): Promise<DayPlate>
  findById(id: string): Promise<DayPlate>;
  findByRestaurant(restaurant_id: string): Promise<DayPlate>;
  findByName(description: string): Promise<DayPlate>;

}

export { IDayPlatesRepository}