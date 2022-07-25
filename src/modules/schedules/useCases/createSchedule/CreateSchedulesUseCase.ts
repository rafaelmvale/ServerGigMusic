import { IMusiciansRepertory } from "@modules/musician/repositories/IMusiciansRepository";
import { Schedule } from "@modules/schedules/infra/typeorm/entities/Schedule";
import { IScheduleRepository } from "@modules/schedules/repositories/ISchedulesRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";


interface IRequest { 
  musician_id: string;
  schedule_date: Date;
}

@injectable()
class CreateSchedulesUseCase {
  constructor(
    @inject("SchedulesRepository")
    private schedulesRepository: IScheduleRepository,
    @inject("MusiciansRepository")
    private musiciansRepository: IMusiciansRepertory
  ){}

  async execute({
    schedule_date,
    musician_id 
  }: IRequest): Promise<Schedule>{

    const schedule = await this.schedulesRepository.create({
      schedule_date,
      musician_id 
    });

    return schedule;
  }
}

export { CreateSchedulesUseCase }