import { IMusiciansRepertory } from "@modules/musician/repositories/IMusiciansRepository";
import { Schedule } from "@modules/schedules/infra/typeorm/entities/Schedule";
import { IScheduleRepository } from "@modules/schedules/repositories/ISchedulesRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";


interface IRequest { 
  id: string;
  musician_id: string;
  schedule_date: Date;
}

@injectable()
class CreateSchedulesUseCase {
  constructor(
    @inject("SchedulesRepository")
    private schedulesRepository: IScheduleRepository,
    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider,
    @inject("MusiciansRepository")
    private musiciansRepository: IMusiciansRepertory
  ){}

  async execute({
    id, 
    musician_id, 
    schedule_date
  }: IRequest): Promise<Schedule>{
    const minimumHour = 24;

    const musicianUnavailable = await this.schedulesRepository.findOpenScheduleByMusician(id);

    if(musicianUnavailable){
      throw new AppError("Musician is unavailable");
    }

    const dateNow = this.dateProvider.dateNow();

    const compare = this.dateProvider.compareInHours(
      dateNow, 
      schedule_date,
    );


    if( compare > minimumHour ){
      throw new AppError("Invalid return time!");
    }

    const schedule = await this.schedulesRepository.create({
      id, 
      musician_id, 
      schedule_date
    });

    return schedule;
  }
}

export { CreateSchedulesUseCase }