import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ThumbnailsHotelsService } from './thumbnails_hotels.service';
import { CreateThumbnailsHotelDto } from './dto/create-thumbnails_hotel.dto';
import { UpdateThumbnailsHotelDto } from './dto/update-thumbnails_hotel.dto';

@Controller('thumbnails-hotels')
export class ThumbnailsHotelsController {
  constructor(private readonly thumbnailsHotelsService: ThumbnailsHotelsService) {}

  @Post()
  create(@Body() createThumbnailsHotelDto: CreateThumbnailsHotelDto) {
    return this.thumbnailsHotelsService.create(createThumbnailsHotelDto);
  }

  @Get()
  findAll() {
    return this.thumbnailsHotelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.thumbnailsHotelsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateThumbnailsHotelDto: UpdateThumbnailsHotelDto) {
    return this.thumbnailsHotelsService.update(id, updateThumbnailsHotelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.thumbnailsHotelsService.remove(id);
  }
}
