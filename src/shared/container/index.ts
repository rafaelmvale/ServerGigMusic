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
import { IDayPlatesRepository } from '@modules/restaurants/repositories/IDayPlateRepository';
import { DayPlatesRepository } from '@modules/restaurants/infra/typeorm/repositories/DayPlatesRepository';
import { IDayDrinksRepository } from '@modules/restaurants/repositories/IDayDrinksRepository';
import { DayDrinksRepository } from '@modules/restaurants/infra/typeorm/repositories/DayDrinksRepository';

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

container.registerSingleton<IDayPlatesRepository>(
  "DayPlatesRepository",
  DayPlatesRepository
)

container.registerSingleton<IDayDrinksRepository>(
  "DayDrinksRepository",
  DayDrinksRepository
)