import { Module } from '@nestjs/common';
import { ThumbnailsService } from './thumbnails.service';
import { ThumbnailsController } from './thumbnails.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ThumbnailsController],
  providers: [ThumbnailsService, PrismaService]
})
export class ThumbnailsModule {}
