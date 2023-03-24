import { Module } from '@nestjs/common';
import { PlatesService } from './plates.service';
import { PlatesController } from './plates.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PlatesController],
  providers: [PlatesService, PrismaService]
})
export class PlatesModule {}
