const configSapDBMA = {
  client: 'oracledb',
  connection: {
    host: '10.7.3.14',
    database: 'CCP_STD',
    user: 'SDIGITAL',
    password: 'sujau#123',
  },
};

const configSapDBPA = {
  client: 'oracledb',
  connection: {
    host: '10.130.3.126',
    database: 'CLP_STD',
    user: 'SDIGITAL',
    password: 'sujau#123',
  },
};

export { configSapDBMA, configSapDBPA };
