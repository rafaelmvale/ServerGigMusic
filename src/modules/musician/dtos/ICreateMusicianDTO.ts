import { Repertory } from "../infra/typeorm/entities/Repertory";


interface ICreateMusicianDTO {
  name: string;
  style: string;
  contact: string;
  satisfaction: number;
  user_id?: string;
  repertory_id?: string;
  id?: string;
}

export { ICreateMusicianDTO }