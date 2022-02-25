import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { BuscarPorNumeroServicoController } from '../modules/medidas/useCases/BuscarPorNumeroServico/BuscarPorNumeroServicoController';

const medidasRoutes = Router();

const buscarPorNumeroServicoController = new BuscarPorNumeroServicoController();

medidasRoutes.get(
  '/',
  celebrate({
    [Segments.QUERY]: {
      empresaOperadora: Joi.number().valid(53, 82, 86, 95, 98).required(),
      numeroServico: Joi.string()
        .required()
        .pattern(new RegExp(/^[0-9.]+$/))
        .length(10),
    },
  }),
  buscarPorNumeroServicoController.handle,
);

export { medidasRoutes };
