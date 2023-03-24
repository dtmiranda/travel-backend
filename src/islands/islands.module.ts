import { Module } from '@nestjs/common';
import { IslandsService } from './islands.service';
import { IslandsController } from './islands.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [IslandsController],
  providers: [IslandsService, PrismaService]
})
export class IslandsModule {}
