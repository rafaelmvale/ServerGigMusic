import { IcreateUserTokenDTO } from "../dtos/ICreateUserTokenDTO"
import { UserTokens } from "../infra/typeorm/entities/UserTokens"



interface IUsersTokensRepository {
   create({
    expires_date,
    refresh_token,
    user_id,
   }: IcreateUserTokenDTO): Promise<UserTokens>;
}

export { IUsersTokensRepository }