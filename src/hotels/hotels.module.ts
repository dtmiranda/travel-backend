import { Module } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { HotelsController } from './hotels.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [HotelsController],
  providers: [HotelsService, PrismaService]
})
export class HotelsModule {}
