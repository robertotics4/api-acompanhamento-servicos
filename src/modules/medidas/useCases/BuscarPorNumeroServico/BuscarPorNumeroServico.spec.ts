import { MedidasRepositoryInMemory } from '../../repositories/in-memory/MedidasRepositoryInMemory';
import { BuscarPorNumeroServicoUseCase } from './BuscarPorNumeroServicoUseCase';

let medidasRepositoryInMemory: MedidasRepositoryInMemory;
let buscarPorNumeroServico: BuscarPorNumeroServicoUseCase;

describe('Buscar medidas por protocolo', () => {
  beforeEach(() => {
    medidasRepositoryInMemory = new MedidasRepositoryInMemory();
    buscarPorNumeroServico = new BuscarPorNumeroServicoUseCase(
      medidasRepositoryInMemory,
    );
  });

  it('Espero que sejam listadas as medidas referentes a um protocolo específico', async () => {
    const medidas = await buscarPorNumeroServico.execute('8024709119');

    expect(medidas.length).toBe(3);
  });
});
