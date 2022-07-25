import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateRepertoryUseCase } from "./CreateRepertoryUseCase";


class CreateRepertoryController { 
  async handle(request: Request, response: Response): Promise<Response> {
    const {  name } = request.body;

    const createRepertoryUseCase = container.resolve(CreateRepertoryUseCase);

    const repertory = await createRepertoryUseCase.execute({name});

    return response.status(201).send();
  }
}

export { CreateRepertoryController }