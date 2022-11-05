import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ThumbnailsService } from './thumbnails.service';
import { CreateThumbnailDto } from './dto/create-thumbnail.dto';
import { UpdateThumbnailDto } from './dto/update-thumbnail.dto';

@Controller('thumbnails')
export class ThumbnailsController {
  constructor(private readonly thumbnailsService: ThumbnailsService) {}

  @Post()
  create(@Body() createThumbnailDto: CreateThumbnailDto) {
    return this.thumbnailsService.create(createThumbnailDto);
  }

  @Get()
  findAll() {
    return this.thumbnailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.thumbnailsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateThumbnailDto: UpdateThumbnailDto) {
    return this.thumbnailsService.update(id, updateThumbnailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.thumbnailsService.remove(id);
  }
}
