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
      where: { musician_id, schedule_date: null},
    });

    return openByMusician;
  }

  async create({id, musician_id, schedule_date }: ICreateScheduleDTO): Promise<Schedule> {
    const schedule = this.repository.create({
      musician_id, 
      schedule_date, 
      id
    });

    await this.repository.save(schedule);

    return schedule;
  }

  async findById(id: string): Promise<Schedule> {
    const schedule = await this.repository.findOne(id);

    return schedule;
  }
  async findByUser(user_id: string): Promise<Schedule> {
    const schedule = await this.repository.findOne(user_id);

    return schedule;
  }

}

export { SchedulesRepository }