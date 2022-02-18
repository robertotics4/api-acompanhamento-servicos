import { Medida } from '../entities/Medida';

interface IMedidasRepository {
  buscarPorNumeroServico(numeroServico: string): Promise<Medida[]>;
}

export { IMedidasRepository };
