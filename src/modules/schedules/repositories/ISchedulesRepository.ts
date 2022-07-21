import { ICreateScheduleDTO } from "../dtos/ICreateSchedulesDTO";
import { Schedule } from "../infra/typeorm/entities/Schedule";



interface IScheduleRepository {
  findOpenScheduleByMusician(musician_id: string): Promise<Schedule>
  create(data: ICreateScheduleDTO): Promise<Schedule> 
  findById(id: string): Promise<Schedule>
  findByUser(user_id: string): Promise<Schedule>
}

export { IScheduleRepository }