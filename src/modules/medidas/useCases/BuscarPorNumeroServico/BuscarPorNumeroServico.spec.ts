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

  it('Espero que sejam listadas as medidas referentes a um protocolo e uma contaContrato específicos de uma determinada empresaOperadora', async () => {
    const medidas = await buscarPorNumeroServico.execute({
      empresaOperadora: 98,
      numeroServico: '8024708888',
      contaContrato: '000000002828',
    });

    expect(medidas.length).toBe(1);
  });
});
