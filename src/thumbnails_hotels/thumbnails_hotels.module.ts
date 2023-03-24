import { Module } from '@nestjs/common';
import { ThumbnailsHotelsService } from './thumbnails_hotels.service';
import { ThumbnailsHotelsController } from './thumbnails_hotels.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ThumbnailsHotelsController],
  providers: [ThumbnailsHotelsService, PrismaService]
})
export class ThumbnailsHotelsModule {}
