import { Controller, Get, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DATA_SOURCE_OPTIONS } from './database';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}

@Module({
  imports: [TypeOrmModule.forRoot(DATA_SOURCE_OPTIONS)],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
