import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { BuscarPorNumeroServicoUseCase } from './BuscarPorNumeroServicoUseCase';

class BuscarPorNumeroServicoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { empresaOperadora, numeroServico, contaContrato } = request.query;

    const buscarPorNumeroServico = container.resolve(
      BuscarPorNumeroServicoUseCase,
    );

    const medidas = await buscarPorNumeroServico.execute({
      empresaOperadora: Number(empresaOperadora),
      numeroServico: numeroServico as string,
      contaContrato: contaContrato as string,
    });

    return response.json(medidas);
  }
}

export { BuscarPorNumeroServicoController };
