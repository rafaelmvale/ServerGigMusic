import { ICreateUserDTO } from "../../../../modules/accounts/dtos/ICreateUserDTO";
import { User } from "../../../../modules/accounts/entities/User";
import { getRepository, Repository } from "typeorm";
import { IUsersRepository  } from "../IUsersRepository";


class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor(){
    this.repository = getRepository(User);
  }
  async create({
    name, 
    email, 
    whatsapp, 
    password 
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name, 
      email, 
      whatsapp,
      password,
    });

    await this.repository.save(user);
  }
}

export { UsersRepository }