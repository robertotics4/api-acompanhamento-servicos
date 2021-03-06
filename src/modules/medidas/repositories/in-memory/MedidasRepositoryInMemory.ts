import { IBuscarPorNumeroServicoDTO } from 'modules/medidas/dtos/IBuscarPorNumeroServicoDTO';
import { Medida } from '../../entities/Medida';
import { IMedidasRepository } from '../IMedidasRepository';

class MedidasRepositoryInMemory implements IMedidasRepository {
  private readonly medidas: Medida[] = [
    {
      empresaOperadora: 98,
      numeroNota: '001059605158',
      numeroServico: '8024709119',
      descricaoTipoNota: 'Micro e Minigeração',
      descricaoCodeNota: 'Acesso à Microgeração Distribuída',
      dataCriacao: new Date(2021, 11, 23),
      dataConclusaoDesejada: new Date(2022, 5, 13),
      contaContrato: '003002125110',
      numeroSolicitacaoAtc: '8024709119',
      descricaoStatus: 'Ativa',
      nomeMedida: 'Validações iniciais',
      descricaoMedida: 'Aprovada',
      numSequenciaMedida: 3,
      dataFimPlanejadoMedida: new Date(2021, 11, 24),
      dataConclusao: new Date(2021, 11, 24),
    },
    {
      empresaOperadora: 98,
      numeroNota: '001059605158',
      numeroServico: '8024709119',
      descricaoTipoNota: 'Micro e Minigeração',
      descricaoCodeNota: 'Acesso à Microgeração Distribuída',
      dataCriacao: new Date(2021, 11, 23),
      dataConclusaoDesejada: new Date(2022, 5, 13),
      contaContrato: '003002125110',
      numeroSolicitacaoAtc: '8024709119',
      descricaoStatus: 'Ativa',
      nomeMedida: 'Realizar Estudo',
      descricaoMedida: 'Sem Necessidade de Obra',
      numSequenciaMedida: 2,
      dataFimPlanejadoMedida: new Date(2021, 11, 27),
      dataConclusao: new Date(2021, 11, 27),
    },
    {
      empresaOperadora: 98,
      numeroNota: '001059605158',
      numeroServico: '8024709119',
      descricaoTipoNota: 'Micro e Minigeração',
      descricaoCodeNota: 'Acesso à Microgeração Distribuída',
      dataCriacao: new Date(2021, 11, 23),
      dataConclusaoDesejada: new Date(2022, 5, 13),
      contaContrato: '003002125110',
      numeroSolicitacaoAtc: '8024709119',
      descricaoStatus: 'Ativa',
      nomeMedida: 'Analisar Projeto',
      descricaoMedida: 'Projeto Analisado',
      numSequenciaMedida: 1,
      dataFimPlanejadoMedida: new Date(2021, 11, 31),
      dataConclusao: new Date(2021, 11, 31),
    },
    {
      empresaOperadora: 98,
      numeroNota: '001059605257',
      numeroServico: '8024708888',
      descricaoTipoNota: 'Ligação nova',
      descricaoCodeNota: 'Solicitação de Ligação nova',
      dataCriacao: new Date(2022, 1, 10),
      dataConclusaoDesejada: new Date(2022, 1, 20),
      contaContrato: '000000002828',
      numeroSolicitacaoAtc: '8024707474',
      descricaoStatus: 'Ativa',
      nomeMedida: 'Análise de documentos',
      descricaoMedida: 'Análise da documentação finalizada',
      numSequenciaMedida: 1,
      dataFimPlanejadoMedida: new Date(2022, 1, 13),
      dataConclusao: new Date(2022, 1, 13),
    },
    {
      empresaOperadora: 95,
      numeroNota: '001059605158',
      numeroServico: '8024709119',
      descricaoTipoNota: 'Micro e Minigeração',
      descricaoCodeNota: 'Acesso à Microgeração Distribuída',
      dataCriacao: new Date(2021, 11, 23),
      dataConclusaoDesejada: new Date(2022, 5, 13),
      contaContrato: '003002125110',
      numeroSolicitacaoAtc: '8024709119',
      descricaoStatus: 'Ativa',
      nomeMedida: 'Validações iniciais',
      descricaoMedida: 'Aprovada',
      numSequenciaMedida: 3,
      dataFimPlanejadoMedida: new Date(2021, 11, 24),
      dataConclusao: new Date(2021, 11, 24),
    },
    {
      empresaOperadora: 95,
      numeroNota: '001059605158',
      numeroServico: '8024709119',
      descricaoTipoNota: 'Micro e Minigeração',
      descricaoCodeNota: 'Acesso à Microgeração Distribuída',
      dataCriacao: new Date(2021, 11, 23),
      dataConclusaoDesejada: new Date(2022, 5, 13),
      contaContrato: '003002125110',
      numeroSolicitacaoAtc: '8024709119',
      descricaoStatus: 'Ativa',
      nomeMedida: 'Realizar Estudo',
      descricaoMedida: 'Sem Necessidade de Obra',
      numSequenciaMedida: 2,
      dataFimPlanejadoMedida: new Date(2021, 11, 27),
      dataConclusao: new Date(2021, 11, 27),
    },
  ];

  async buscarPorNumeroServico({
    empresaOperadora,
    numeroServico,
    contaContrato,
  }: IBuscarPorNumeroServicoDTO): Promise<Medida[]> {
    const medidas = this.medidas.filter(
      medida =>
        empresaOperadora === medida.empresaOperadora &&
        numeroServico === medida.numeroServico &&
        contaContrato === medida.contaContrato,
    );

    return medidas;
  }
}

export { MedidasRepositoryInMemory };
