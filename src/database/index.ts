import knex from 'knex';

import { configSapDBMA, configSapDBPA } from './knexfile';

const connectionSapDBMA = knex(configSapDBMA);
const connectionSapDBPA = knex(configSapDBPA);

export { connectionSapDBMA, connectionSapDBPA };
