import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { Medida } from '../../entities/Medida';
import { IMedidasRepository } from '../../repositories/IMedidasRepository';

interface IRequest {
  empresaOperadora: number;
  numeroServico: string;
}

@injectable()
class BuscarPorNumeroServicoUseCase {
  constructor(
    @inject('MedidasRepository')
    private medidasRepository: IMedidasRepository,
  ) {}

  async execute({
    empresaOperadora,
    numeroServico,
  }: IRequest): Promise<Medida[]> {
    if (!empresaOperadora) {
      throw new AppError('A empresaOperadora é obrigatória!');
    }

    if (!numeroServico) {
      throw new AppError('O numeroServico é obrigatório!');
    }

    const medidas = await this.medidasRepository.buscarPorNumeroServico({
      empresaOperadora,
      numeroServico,
    });

    return medidas;
  }
}

export { BuscarPorNumeroServicoUseCase };
