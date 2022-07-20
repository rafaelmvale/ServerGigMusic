import { ICreateRepertoryDTO } from "../dtos/ICreateRepertoryDTO";
import { Repertory } from "../infra/typeorm/entities/Repertory";


interface IRepertoriesRepository {
  create({ name } : ICreateRepertoryDTO): Promise<Repertory>
  findById(id: string): Promise<Repertory>;
}

export { IRepertoriesRepository }