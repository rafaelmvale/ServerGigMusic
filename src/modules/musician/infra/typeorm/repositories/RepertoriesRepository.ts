import { ICreateRepertoryDTO } from "@modules/musician/dtos/ICreateRepertoryDTO";
import { IRepertoriesRepository } from "@modules/musician/repositories/IRepertoriesRepository";
import { getRepository, Repository } from "typeorm";
import { Repertory } from "../entities/Repertory";

class RepertoriesRepository implements IRepertoriesRepository {
  private repository: Repository<Repertory>

  constructor() {
    this.repository = getRepository(Repertory);
  }


  async create({ name, id }: ICreateRepertoryDTO): Promise<Repertory> {
      const repertory = this.repository.create({name, id});

      await this.repository.save(repertory);

      return repertory;
  }



  async findById(id: string): Promise<Repertory> {
    const repertory = await this.repository.findOne(id);

    return repertory;
  }

}

export { RepertoriesRepository }