import { ICreateMusicianDTO } from "../dtos/ICreateMusicianDTO";
import { Musician } from "../infra/typeorm/entities/Musician";


interface IMusiciansRepertory { 
  create({
    name,
    contact,
    style,
    satisfaction,
    user_id,
    repertory_id
  }: ICreateMusicianDTO ) : Promise<Musician>
  findById(id: string): Promise<Musician>;
  findByUser(user_id: string): Promise<Musician>;
  findByName(name: string): Promise<Musician>;

}

export { IMusiciansRepertory }