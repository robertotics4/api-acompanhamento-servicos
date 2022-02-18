import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { BuscarPorNumeroServicoUseCase } from './BuscarPorNumeroServicoUseCase';

class BuscarPorNumeroServicoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { numeroServico } = request.params;

    const buscarPorNumeroServico = container.resolve(
      BuscarPorNumeroServicoUseCase,
    );

    const medidas = await buscarPorNumeroServico.execute(numeroServico);

    return response.json(medidas);
  }
}

export { BuscarPorNumeroServicoController };
