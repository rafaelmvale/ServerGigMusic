import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateMusicianUseCase } from "./CreateMusicianUseCase";


class CreateMusicianController {
  async handle(request: Request, response: Response): Promise<Response>{
    const {
      name,
      style,
      contact,
      satisfaction,
      repertory
    } = request.body;

    const createMusicianUseCase = container.resolve(CreateMusicianUseCase);

    const musician = await createMusicianUseCase.execute({
      name,
      style,
      contact,
      satisfaction,
      repertory
    });

    return response.json(musician);
  }
}
export { CreateMusicianController }