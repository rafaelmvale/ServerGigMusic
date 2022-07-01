import { UsersRepository } from "../../src/modules/accounts/repositories/implementations/UsersRepository";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
){
  const authHeader = request.headers.authorization;

  if(!authHeader){
    throw new AppError("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try{
    const { sub: user_id } = verify(token, "154598a75a26ae5b4d67ac0948037968") as IPayload;
    
    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);

    if(!user){
      throw new AppError("User does not exists!", 401);
    }

    request.user = {
      id: user_id,
    };

    next();
  }catch{
    throw new AppError("Invalid token!", 401);
  }
}