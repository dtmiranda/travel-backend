import { Module } from '@nestjs/common';
import { ThumbnailsRestaurantsService } from './thumbnails_restaurants.service';
import { ThumbnailsRestaurantsController } from './thumbnails_restaurants.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ThumbnailsRestaurantsController],
  providers: [ThumbnailsRestaurantsService, PrismaService]
})
export class ThumbnailsRestaurantsModule {}
