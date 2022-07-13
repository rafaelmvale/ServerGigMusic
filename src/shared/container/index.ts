import { container } from 'tsyringe';

import "@shared/container/providers";

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { UsersTokensRepository } from '@modules/accounts/infra/typeorm/repositories/UsersTokensRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { IUsersTokensRepository } from '@modules/accounts/repositories/IUsersTokensRepository';
import { IRestaurantsRepository } from '@modules/restaurants/repositories/IRestaurantsRepository';
import { RestaurantsRepository } from '@modules/restaurants/infra/typeorm/repositories/RestaurantesRepository';

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)


container.registerSingleton<IUsersTokensRepository>(
  "UsersTokensRepository",
  UsersTokensRepository
)



container.registerSingleton<IRestaurantsRepository>(
  "RestaurantsRepository",
  RestaurantsRepository
)