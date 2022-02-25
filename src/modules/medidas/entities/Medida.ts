interface IMedida {
  empresaOperadora: number;
  numeroNota: string;
  numeroServico: string;
  descricaoTipoNota: string;
  descricaoCodeNota: string;
  dataCriacao: Date;
  dataConclusaoDesejada: Date;
  contaContrato: string;
  numeroSolicitacaoAtc: string;
  descricaoStatus: string;
  nomeMedida: string;
  descricaoMedida: string;
  numSequenciaMedida: number;
  dataFimPlanejadoMedida: Date;
  dataConclusao: Date;
}

class Medida {
  empresaOperadora: number;

  numeroNota: string;

  numeroServico: string;

  descricaoTipoNota: string;

  descricaoCodeNota: string;

  dataCriacao: Date;

  dataConclusaoDesejada: Date;

  contaContrato: string;

  numeroSolicitacaoAtc: string;

  descricaoStatus: string;

  nomeMedida: string;

  descricaoMedida: string;

  numSequenciaMedida: number;

  dataFimPlanejadoMedida: Date;

  dataConclusao: Date;

  constructor(args: IMedida) {
    this.empresaOperadora = args.empresaOperadora;
    this.numeroNota = args.numeroNota;
    this.numeroServico = args.numeroServico;
    this.descricaoTipoNota = args.descricaoTipoNota;
    this.descricaoCodeNota = args.descricaoCodeNota;
    this.dataCriacao = args.dataCriacao;
    this.dataConclusaoDesejada = args.dataConclusaoDesejada;
    this.contaContrato = args.contaContrato;
    this.numeroSolicitacaoAtc = args.numeroSolicitacaoAtc;
    this.descricaoStatus = args.descricaoStatus;
    this.nomeMedida = args.nomeMedida;
    this.descricaoMedida = args.descricaoMedida;
    this.numSequenciaMedida = args.numSequenciaMedida;
    this.dataFimPlanejadoMedida = args.dataFimPlanejadoMedida;
    this.dataConclusao = args.dataConclusao;
  }
}

export { Medida };
