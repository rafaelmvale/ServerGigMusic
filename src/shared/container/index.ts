import { container } from 'tsyringe';

import "@shared/container/providers";

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { UsersTokensRepository } from '@modules/accounts/infra/typeorm/repositories/UsersTokensRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { IUsersTokensRepository } from '@modules/accounts/repositories/IUsersTokensRepository';
import { IRestaurantsRepository } from '@modules/restaurants/repositories/IRestaurantsRepository';
import { RestaurantsRepository } from '@modules/restaurants/infra/typeorm/repositories/RestaurantesRepository';
import { IRepertoriesRepository } from '@modules/musician/repositories/IRepertoriesRepository';
import { RepertoriesRepository } from '@modules/musician/infra/typeorm/repositories/RepertoriesRepository';
import { IMusiciansRepertory } from '@modules/musician/repositories/IMusiciansRepository';
import { MusiciansRepository } from '@modules/musician/infra/typeorm/repositories/MusiciansRepository';

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

container.registerSingleton<IRepertoriesRepository>(
  "RepertoriesRepository",
  RepertoriesRepository
)


container.registerSingleton<IMusiciansRepertory>(
  "MusiciansRepository",
  MusiciansRepository
)