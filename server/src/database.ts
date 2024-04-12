import * as dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

dotenv.config();

export const DATA_SOURCE_OPTIONS: DataSourceOptions = {
  type: 'postgres',
  namingStrategy: new SnakeNamingStrategy(),
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? '5432'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['dist/entities/*.js'],
  migrations: ['dist/migrations/*.js'],
};

export default new DataSource(DATA_SOURCE_OPTIONS);
