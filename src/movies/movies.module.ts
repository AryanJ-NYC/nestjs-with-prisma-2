import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MoviesController],
})
export class MoviesModule {}
