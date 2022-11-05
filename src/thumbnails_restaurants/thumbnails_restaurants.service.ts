import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateThumbnailsRestaurantDto } from './dto/create-thumbnails_restaurant.dto';
import { UpdateThumbnailsRestaurantDto } from './dto/update-thumbnails_restaurant.dto';

@Injectable()
export class ThumbnailsRestaurantsService {

  constructor(private readonly prisma: PrismaService){}

  create(createThumbnailsRestaurantDto: CreateThumbnailsRestaurantDto) {
    return this.prisma.thumbnailRestaurant.create({
      data:{
        ...createThumbnailsRestaurantDto
      }
    });
  }

  findAll() {
    return this.prisma.thumbnailRestaurant.findMany();
  }

  findOne(id: string) {
    return this.prisma.thumbnailRestaurant.findUnique({
      where:{ id }
    });
  }

  update(id: string, updateThumbnailsRestaurantDto: UpdateThumbnailsRestaurantDto) {
    return this.prisma.thumbnailRestaurant.update({
      where:{ id },
      data:{
        ...updateThumbnailsRestaurantDto
      }
    });
  }

  remove(id: string) {
    return this.prisma.thumbnailRestaurant.delete({
      where:{ id }
    });
  }
}
