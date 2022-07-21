import { Musician } from '@modules/musician/infra/typeorm/entities/Musician';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';


@Entity("schedules")
class Schedule{
  @PrimaryColumn()
  id: string;

  @ManyToMany(() => Musician)
  @JoinColumn({ name: "musician_id"})
  musician: Musician;

  @Column()
  musician_id: string;

  @Column()
  schedule_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor(){
    if(!this.id){
      this.id = uuidV4();
    }
  }

}
export { Schedule }