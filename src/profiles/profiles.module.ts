import { Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProfilesController],
  providers: [ProfilesService, PrismaService]
})
export class ProfilesModule {}
