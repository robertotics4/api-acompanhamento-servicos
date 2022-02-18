import { container } from 'tsyringe';
import { IMedidasRepository } from '../../modules/medidas/repositories/IMedidasRepository';
import { MedidasRepository } from '../../modules/medidas/repositories/implementations/MedidasRepository';

container.registerSingleton<IMedidasRepository>(
  'MedidasRepository',
  MedidasRepository,
);
