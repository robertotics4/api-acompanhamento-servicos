interface IMedida {
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
}

class Medida {
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

  constructor(args: IMedida) {
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
  }
}

export { Medida };
