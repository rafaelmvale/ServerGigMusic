import { Connection, createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
  host: string;
}


// getConnectionOptions().then(options => {
//   const newOptions = options as IOptions;

//   newOptions.host = 'database_gigmusic';
//   createConnection({
//     ...options,
//   });
// })

export default async (host = "database_gigmusic"): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      host: process.env.NODE_ENV === 'gigmusic' ? 'localhost' : host,
      database: process.env.NODE_ENV === "test" ? "gigmusic_test" : defaultOptions.database
    })
  );
};