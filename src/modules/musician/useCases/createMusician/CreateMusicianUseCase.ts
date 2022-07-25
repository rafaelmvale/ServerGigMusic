import { Musician } from "@modules/musician/infra/typeorm/entities/Musician";
import { IMusiciansRepertory } from "@modules/musician/repositories/IMusiciansRepository";
import { IRepertoriesRepository } from "@modules/musician/repositories/IRepertoriesRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";



interface IRequest {
  user_id: string;
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
    user_id,
    name,
    contact, 
    satisfaction,
    style, 
    repertory
  }: IRequest): Promise<IResponse> {
   
    const repertoryMusician =  await this.repertoriesRepository.create({
      name: repertory
    });

    await this.musiciansRepository.create({
      name,
      contact,
      satisfaction,
      style, 
      user_id,
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
        name: repertory
      }
    }
    return musicianReturn;
  }
}

export { CreateMusicianUseCase }