import { ICreateRepertoryDTO } from "@modules/musician/dtos/ICreateRepertoryDTO";
import { Repertory } from "@modules/musician/infra/typeorm/entities/Repertory";
import { IRepertoriesRepository } from "@modules/musician/repositories/IRepertoriesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateRepertoryUseCase {
  constructor(
    @inject("RepertoriesRepository")
    private repertoriesRepository: IRepertoriesRepository
  ) {}

  async execute({name}: ICreateRepertoryDTO) : Promise<void> {
    const repertory = await this.repertoriesRepository.create({name});

  }
}

export { CreateRepertoryUseCase }