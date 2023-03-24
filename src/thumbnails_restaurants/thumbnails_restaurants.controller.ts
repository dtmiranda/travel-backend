import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ThumbnailsRestaurantsService } from './thumbnails_restaurants.service';
import { CreateThumbnailsRestaurantDto } from './dto/create-thumbnails_restaurant.dto';
import { UpdateThumbnailsRestaurantDto } from './dto/update-thumbnails_restaurant.dto';

@Controller('thumbnails-restaurants')
export class ThumbnailsRestaurantsController {
  constructor(private readonly thumbnailsRestaurantsService: ThumbnailsRestaurantsService) {}

  @Post()
  create(@Body() createThumbnailsRestaurantDto: CreateThumbnailsRestaurantDto) {
    return this.thumbnailsRestaurantsService.create(createThumbnailsRestaurantDto);
  }

  @Get()
  findAll() {
    return this.thumbnailsRestaurantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.thumbnailsRestaurantsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateThumbnailsRestaurantDto: UpdateThumbnailsRestaurantDto) {
    return this.thumbnailsRestaurantsService.update(id, updateThumbnailsRestaurantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.thumbnailsRestaurantsService.remove(id);
  }
}
