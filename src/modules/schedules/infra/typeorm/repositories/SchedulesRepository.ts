import { ICreateScheduleDTO } from "@modules/schedules/dtos/ICreateSchedulesDTO";
import { IScheduleRepository } from "@modules/schedules/repositories/ISchedulesRepository";
import { getRepository, Repository } from "typeorm";
import { Schedule } from "../entities/Schedule";


class SchedulesRepository implements IScheduleRepository {
  private repository: Repository<Schedule>;

  constructor(){
    this.repository = getRepository(Schedule);
  }


  async findOpenScheduleByMusician(musician_id: string): Promise<Schedule> {
    const openByMusician = await this.repository.findOne({
      where: { musician_id },
    });

    return openByMusician;
  }

  async create({musician_id, schedule_date }: ICreateScheduleDTO): Promise<Schedule> {
    const schedule = this.repository.create({
      schedule_date,
      musician_id, 
    });

    await this.repository.save(schedule);

    return schedule;
  }

  async findById(id: string): Promise<Schedule> {
    const schedule = await this.repository.findOne(id);

    return schedule;
  }
}

export { SchedulesRepository }