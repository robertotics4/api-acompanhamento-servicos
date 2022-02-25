const configSapDBMA = {
  client: 'oracledb',
  connection: {
    host: '10.7.3.14',
    database: 'CCP_STD',
    user: 'u10190',
    password: 'Xls_52bcd',
  },
};

const configSapDBPA = {
  client: 'oracledb',
  connection: {
    host: '10.130.3.126',
    database: 'CLP_STD',
    user: 'u10190',
    password: 'Xls_52bcd',
  },
};

export { configSapDBMA, configSapDBPA };
