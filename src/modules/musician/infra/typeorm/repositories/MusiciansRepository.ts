import { ICreateMusicianDTO } from "@modules/musician/dtos/ICreateMusicianDTO";
import { IMusiciansRepertory } from "@modules/musician/repositories/IMusiciansRepository";
import { getRepository, Repository } from "typeorm";
import { Musician } from "../entities/Musician";


class MusiciansRepository implements IMusiciansRepertory {
  private repository: Repository<Musician>

  constructor(){
    this.repository = getRepository(Musician);
  }
  async create({
    name,
    contact,
    satisfaction,
    style,
    user_id,
    id,
    repertory_id
  }: ICreateMusicianDTO): Promise<Musician> {
    const musician = this.repository.create({
      name,
      contact,
      satisfaction,
      style,
      user_id,
      id,
      repertory_id
    })

    await this.repository.save(musician);
    
    return musician;
  }
  async findById(id: string): Promise<Musician> {
    const musician = await this.repository.findOne(id);

    return musician;
  }
  async findByUser(user_id: string): Promise<Musician> {
    const musician = await this.repository.findOne(user_id);

    return musician;
  }
  
  async findByName(name: string): Promise<Musician> {
    const musician = await this.repository.findOne(name);

    return musician;
  }

}
export { MusiciansRepository }