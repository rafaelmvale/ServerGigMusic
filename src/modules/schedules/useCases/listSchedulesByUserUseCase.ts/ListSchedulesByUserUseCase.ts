import { IMusiciansRepertory } from "@modules/musician/repositories/IMusiciansRepository";
import { IRepertoriesRepository } from "@modules/musician/repositories/IRepertoriesRepository";
import { IDayDrinksRepository } from "@modules/restaurants/repositories/IDayDrinksRepository";
import { IDayPlatesRepository } from "@modules/restaurants/repositories/IDayPlateRepository";
import { IRestaurantsRepository } from "@modules/restaurants/repositories/IRestaurantsRepository";
import { Schedule } from "@modules/schedules/infra/typeorm/entities/Schedule";
import { IScheduleRepository } from "@modules/schedules/repositories/ISchedulesRepository";
import { inject, injectable } from "tsyringe";


interface IRequest {
  restaurant_id: string;
  musician_id: string;
}


interface IResponse {
  restaurant: {
    scheduleDate: Date;
    restaurantDayPlate: string;
    drinkDaySuggestion: string;
  }, 
  musician: {
    name: string;
    date: Date;
    style: string;
    repertory: string;
    contact: string;
    satisfaction: number;
  }
}

@injectable()
class ListSchedulesByUserUseCase { 

  constructor(
    @inject("SchedulesRepository")
    private schedulesRepository: IScheduleRepository,
    @inject("MusiciansRepository")
    private musiciansRepository: IMusiciansRepertory, 
    @inject("RepertoriesRepository")
    private repertoriesRepository: IRepertoriesRepository,
    @inject("DayPlatesRepository")
    private dayPlatesRepository: IDayPlatesRepository,
    @inject("DayDrinksRepository")
    private dayDrinksRepository: IDayDrinksRepository
  ){}

  async execute({restaurant_id, musician_id }: IRequest ): Promise<IResponse>{

    const musician =  await this.musiciansRepository.findById(musician_id);
    const repertory = await this.repertoriesRepository.findById(musician.repertory_id);
    const dayPlates = await this.dayPlatesRepository.findByRestaurant(restaurant_id);
    const dayDrinks = await this.dayDrinksRepository.findByRestaurant(restaurant_id);
    const schedule = await this.schedulesRepository.findOpenScheduleByMusician(musician_id);

    
    
    const scheduleReturn: IResponse = {    
      restaurant: {
        scheduleDate: schedule.schedule_date,
        drinkDaySuggestion: dayDrinks.description, 
        restaurantDayPlate: dayPlates.description
      }, 
      musician: {
        name: musician.name,
        date: schedule.schedule_date,
        style: musician.style,
        repertory: repertory.name,
        contact: musician.contact,
        satisfaction: musician.satisfaction,
      }
    }

    return  scheduleReturn;

  }
  
}

export { ListSchedulesByUserUseCase }