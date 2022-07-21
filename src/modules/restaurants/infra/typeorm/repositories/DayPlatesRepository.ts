import { ICreateDayPlateDTO } from "@modules/restaurants/dtos/ICreateDayPlateDTO";
import { IDayPlatesRepository } from "@modules/restaurants/repositories/IDayPlateRepository";
import { getRepository, Repository } from "typeorm";
import { DayPlate } from "../entities/DayPlate";


class DayPlatesRepository implements IDayPlatesRepository {
  private repository: Repository<DayPlate>;

  constructor(){
    this.repository = getRepository(DayPlate);
  }

  async create({ name, restaurant_id, id }: ICreateDayPlateDTO): Promise<DayPlate> {
    const dayplate = this.repository.create({name, restaurant_id, id});

    await this.repository.save(dayplate);

    return dayplate;
  }
  async findById(id: string): Promise<DayPlate> {
    const dayplate = await this.repository.findOne(id);

    return dayplate;
  }
  async findByRestaurant(restaurant_id: string): Promise<DayPlate> {
    const dayplate = await this.repository.findOne(restaurant_id);

    return dayplate;
  }
  async findByName(name: string): Promise<DayPlate> {
    const dayplate = await this.repository.findOne(name);

    return dayplate;
  }

}

export { DayPlatesRepository }