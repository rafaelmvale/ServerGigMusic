import { v4 as uuidV4 } from 'uuid';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { Repertory } from "./Repertory";

@Entity("musicians")
class Musician {

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  style: string;
  
  @Column()
  contact: string;

  @Column()
  satisfaction: number;

  @OneToOne(() => User)
  @JoinColumn({name: "user_id"})
  user: User;

  @Column()
  user_id: string;

  @ManyToMany(() => Repertory)
  @JoinColumn({name: "repertory_id"})
  repertory: Repertory;

  @Column()
  repertory_id: string;

  @CreateDateColumn()
  created_at: Date; 

  constructor(){
    if(!this.id){
      this.id = uuidV4();
    }
  }

}

export { Musician }