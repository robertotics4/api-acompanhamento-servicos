import knex from '../../../../database';
import { Medida } from '../../entities/Medida';
import { IMedidasRepository } from '../IMedidasRepository';

class MedidasRepository implements IMedidasRepository {
  async buscarPorNumeroServico(numeroServico: string): Promise<Medida[]> {
    const query = `
          SELECT QM.QMNUM AS NUMERO_NOTA,
              QM.ZZNUMSO AS NUMERO_SERVICO,
              QM.QMTXT AS TXT_TIPO_NOTA,
              CD.KURZTEXT AS TXT_CODE_NOTA,
              TO_DATE(QM.ERDAT, 'YYYYMMDD') AS DATA_CRIACAO,
              TO_DATE(LTRMN, 'YYYYMMDD') AS CONCLUSAO_DESEJADA,
              ZZVKONT AS CONTA_CONTRATO,
              ZZNUMSO AS NUMERO_SOLICITACAO_ATC,
              TJ.TXT30 AS TXTSTATUS,
              MGRP.KURZTEXT AS MEDIDA,
              MCD.KURZTEXT AS TXT_MEDIDA,
              M.MANUM AS SEQUENCIA_MEDIDA,
              TO_DATE(M.PETER, 'YYYYMMDD') AS FIM_PLANEJADO_MEDIDA
          FROM SAPSR3.QMEL QM
          INNER JOIN SAPSR3.JEST JST ON JST.MANDT = QM.MANDT
                                  AND JST.OBJNR = QM.OBJNR
                                  AND JST.INACT = ' '
          INNER JOIN SAPSR3.TJ30T TJ ON TJ.MANDT = QM.MANDT
                                  AND TJ.ESTAT = JST.STAT
                                  AND TJ.STSMA = 'NS_GERAL'
          INNER JOIN SAPSR3.QPGT GRP ON GRP.CODEGRUPPE = QM.QMGRP
                                  AND GRP.KATALOGART = 'D'
          INNER JOIN SAPSR3.QPCT CD ON CD.MANDT = QM.MANDT
                                  AND CD.CODEGRUPPE = GRP.CODEGRUPPE
                                  AND CD.CODE = QM.QMCOD
                                  AND CD.KATALOGART = 'D'
          LEFT JOIN SAPSR3.CRHD CT ON CT.MANDT = QM.MANDT
                                  AND CT.OBJID = QM.ARBPL
          LEFT JOIN SAPSR3.CRTX TXTCT ON TXTCT.MANDT = QM.MANDT
                                    AND TXTCT.OBJID = CT.OBJID
          INNER JOIN SAPSR3.QMSM M ON M.MANDT = QM.MANDT
                                AND QM.QMNUM = M.QMNUM
          INNER JOIN SAPSR3.QPGT MGRP ON MGRP.CODEGRUPPE = M.MNGRP
                                    AND MGRP.KATALOGART = '2'
          INNER JOIN SAPSR3.QPCT MCD ON MCD.MANDT = M.MANDT
                                  AND MCD.CODEGRUPPE = M.MNGRP
                                  AND MCD.CODE = M.MNCOD
                                  AND MCD.KATALOGART = '2'
          WHERE QM.ZZNUMSO = '${numeroServico}'
          ORDER BY M.MANUM DESC`;

    const result = await knex.raw(query);

    const medidas: Medida[] = result.map((item: any) => {
      const medida: Medida = new Medida({
        numeroNota: item.NUMERO_NOTA,
        numeroServico: item.NUMERO_SERVICO,
        descricaoTipoNota: item.TXT_TIPO_NOTA,
        descricaoCodeNota: item.TXT_CODE_NOTA,
        dataCriacao: item.DATA_CRIACAO,
        dataConclusaoDesejada: item.CONCLUSAO_DESEJADA,
        contaContrato: item.CONTA_CONTRATO,
        numeroSolicitacaoAtc: item.NUMERO_SOLICITACAO_ATC,
        descricaoStatus: item.TXTSTATUS,
        nomeMedida: item.MEDIDA,
        descricaoMedida: item.TXT_MEDIDA,
        numSequenciaMedida: item.SEQUENCIA_MEDIDA,
        dataFimPlanejadoMedida: item.FIM_PLANEJADO_MEDIDA,
      });

      return medida;
    });

    return medidas;
  }
}

export { MedidasRepository };
