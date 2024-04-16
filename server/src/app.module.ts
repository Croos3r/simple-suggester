import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DATA_SOURCE_OPTIONS } from './database';

@Module({
  imports: [TypeOrmModule.forRoot(DATA_SOURCE_OPTIONS)],
  controllers: [],
  providers: [],
})
export class AppModule {}
