const configSapDBMA = {
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST_MA,
    database: process.env.DB_NAME_MA,
    user: process.env.DB_USER_MA,
    password: process.env.DB_PASSWORD_MA,
  },
};

const configSapDBPA = {
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST_PA,
    database: process.env.DB_NAME_PA,
    user: process.env.DB_USER_PA,
    password: process.env.DB_PASSWORD_PA,
  },
};

export { configSapDBMA, configSapDBPA };
