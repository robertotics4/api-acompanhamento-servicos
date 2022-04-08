import { inject, injectable } from 'tsyringe';
import completarComZeros from '../../../../utils/completarComZeros';
import { AppError } from '../../../../errors/AppError';
import { Medida } from '../../entities/Medida';
import { IMedidasRepository } from '../../repositories/IMedidasRepository';

interface IRequest {
  empresaOperadora: number;
  numeroServico: string;
  contaContrato: string;
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
    contaContrato,
  }: IRequest): Promise<Medida[]> {
    if (!empresaOperadora) {
      throw new AppError('A empresaOperadora é obrigatória!');
    }

    if (!numeroServico) {
      throw new AppError('O numeroServico é obrigatório!');
    }

    if (!contaContrato) {
      throw new AppError('A contaContrato é obrigatória!');
    }

    const medidas = await this.medidasRepository.buscarPorNumeroServico({
      empresaOperadora,
      numeroServico,
      contaContrato: completarComZeros(contaContrato, 12),
    });

    return medidas;
  }
}

export { BuscarPorNumeroServicoUseCase };
