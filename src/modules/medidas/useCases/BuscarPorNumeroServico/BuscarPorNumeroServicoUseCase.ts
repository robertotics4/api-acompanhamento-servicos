import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { Medida } from '../../entities/Medida';
import { IMedidasRepository } from '../../repositories/IMedidasRepository';

@injectable()
class BuscarPorNumeroServicoUseCase {
  constructor(
    @inject('MedidasRepository')
    private medidasRepository: IMedidasRepository,
  ) {}

  async execute(numeroServico: string): Promise<Medida[]> {
    if (!numeroServico) {
      throw new AppError('O numeroServico é obrigatório!');
    }

    const medidas = await this.medidasRepository.buscarPorNumeroServico(
      numeroServico,
    );

    return medidas;
  }
}

export { BuscarPorNumeroServicoUseCase };
