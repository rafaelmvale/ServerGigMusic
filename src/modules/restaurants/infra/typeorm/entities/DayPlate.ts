import { v4 as uuidV4 } from 'uuid';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Restaurant } from "./Restaurant";


@Entity("dayplates")
class DayPlate {

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;
  
  @ManyToOne(() => Restaurant)
  @JoinColumn({name: "restaurant_id"})
  restaurant: Restaurant;

  @Column()
  restaurant_id: string;

  @CreateDateColumn()
  created_at: Date; 
  
  constructor(){
    if(!this.id){
      this.id = uuidV4();
    }
  }

}
export { DayPlate }