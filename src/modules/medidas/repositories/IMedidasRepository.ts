import { IBuscarPorNumeroServicoDTO } from '../dtos/IBuscarPorNumeroServicoDTO';
import { Medida } from '../entities/Medida';

interface IMedidasRepository {
  buscarPorNumeroServico(data: IBuscarPorNumeroServicoDTO): Promise<Medida[]>;
}

export { IMedidasRepository };
