import { Router } from 'express';
import { BuscarPorNumeroServicoController } from '../modules/medidas/useCases/BuscarPorNumeroServico/BuscarPorNumeroServicoController';

const medidasRoutes = Router();

const buscarPorNumeroServicoController = new BuscarPorNumeroServicoController();

medidasRoutes.get('/:numeroServico', buscarPorNumeroServicoController.handle);

export { medidasRoutes };
