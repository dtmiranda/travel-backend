import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhotosPlatesService } from './photos_plates.service';
import { CreatePhotosPlateDto } from './dto/create-photos_plate.dto';
import { UpdatePhotosPlateDto } from './dto/update-photos_plate.dto';

@Controller('photos-plates')
export class PhotosPlatesController {
  constructor(private readonly photosPlatesService: PhotosPlatesService) {}

  @Post()
  create(@Body() createPhotosPlateDto: CreatePhotosPlateDto) {
    return this.photosPlatesService.create(createPhotosPlateDto);
  }

  @Get()
  findAll() {
    return this.photosPlatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.photosPlatesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhotosPlateDto: UpdatePhotosPlateDto) {
    return this.photosPlatesService.update(id, updatePhotosPlateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.photosPlatesService.remove(id);
  }
}
