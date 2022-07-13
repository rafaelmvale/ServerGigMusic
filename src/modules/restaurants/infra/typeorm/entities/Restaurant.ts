import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("restaurants")
class Restaurant {

  
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;
  
  @Column()
  address: string;
  
  @Column()
  email: string;

  @Column()
  whatsapp: string;


  @Column()
  type: string;

  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if(!this.id){
      this.id = uuidV4();
    }
  }
  
}

export { Restaurant }