import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './pgdb.datasource.config.json';
/*
const config = {
  name: 'pgdb',
  connector: 'postgresql',
  url: '',
  host: '172.30.13.71',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  database: 'lbstarter'
};
*/
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class PgdbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'pgdb';
  //static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.pgdb', {optional: true})
    dsConfig: object = {...config },
  ) {

    // Override data source config from environment variables
    Object.assign(dsConfig, {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      schema: process.env.DB_SCHEMA,
    });
    super(dsConfig);    
  }
}
