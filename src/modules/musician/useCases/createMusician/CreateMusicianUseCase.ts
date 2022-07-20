import { Musician } from "@modules/musician/infra/typeorm/entities/Musician";
import { IMusiciansRepertory } from "@modules/musician/repositories/IMusiciansRepository";
import { IRepertoriesRepository } from "@modules/musician/repositories/IRepertoriesRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";



interface IRequest {
  name: string;
  style: string;
  contact: string;
  satisfaction: number;
  repertory: string;
}
interface IResponse {
  musician: {
    name: string;
    style: string;
    contact: string;
    satisfaction: number;
  };
  repertory: {
    name: string;
  }

}

@injectable()
class CreateMusicianUseCase {
  constructor(
    @inject("MusiciansRepository")
    private musiciansRepository: IMusiciansRepertory,
    @inject("RepertoriesRepository")
    private repertoriesRepository: IRepertoriesRepository
  ){}

  async execute({
    name,
    contact, 
    satisfaction,
    style
  }: IRequest): Promise<IResponse> {
    
    const musician = this.musiciansRepository.findByName(name);
    if(musician){
      throw new AppError("Musician already Exists!");
    }
    const repertoryMusician =  await this.repertoriesRepository.create({
      name
    });
    await this.musiciansRepository.create({
      name,
      contact,
      satisfaction,
      style, 
      repertory_id: repertoryMusician.id
      
    });

    const musicianReturn: IResponse = {
      musician: {
        name,
        contact, 
        style, 
        satisfaction, 
      }, 
      repertory: {
        name
      }
    }
    return musicianReturn;
  }
}

export { CreateMusicianUseCase }