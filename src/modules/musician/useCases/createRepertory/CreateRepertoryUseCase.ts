import { Repertory } from "@modules/musician/infra/typeorm/entities/Repertory";
import { IRepertoriesRepository } from "@modules/musician/repositories/IRepertoriesRepository";
import { inject, injectable } from "tsyringe";


interface IRequest {
  name: string;
}

@injectable()
class CreateRepertoryUseCase {
  constructor(
    @inject("RepertoriesRepository")
    private repertoriesRepository: IRepertoriesRepository
  ) {}

  async execute({name}: IRequest) : Promise<Repertory> {
    const repertory = await this.repertoriesRepository.create({name});

    return repertory;
  }
}

export { CreateRepertoryUseCase }