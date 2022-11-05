import { Module } from '@nestjs/common';
import { PhotosPlatesService } from './photos_plates.service';
import { PhotosPlatesController } from './photos_plates.controller';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PhotosPlatesController],
  providers: [PhotosPlatesService, PrismaService]
})
export class PhotosPlatesModule {}
