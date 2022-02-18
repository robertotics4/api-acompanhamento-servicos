import { Router } from 'express';
import { medidasRoutes } from './medidas.routes';

const router = Router();

router.use('/medidas', medidasRoutes);

export default router;
