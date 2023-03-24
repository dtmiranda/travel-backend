import { Module } from '@nestjs/common';
import { TrailsService } from './trails.service';
import { TrailsController } from './trails.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TrailsController],
  providers: [TrailsService, PrismaService]
})
export class TrailsModule {}
