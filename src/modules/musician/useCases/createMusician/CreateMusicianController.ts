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
    const { id } = request.user;

    const createMusicianUseCase = container.resolve(CreateMusicianUseCase);

    const musician = await createMusicianUseCase.execute({
      name,
      style,
      contact,
      satisfaction,
      user_id: id,
      repertory
    });

    return response.json(musician);
  }
}
export { CreateMusicianController }