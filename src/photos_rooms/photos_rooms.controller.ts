import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhotosRoomsService } from './photos_rooms.service';
import { CreatePhotosRoomDto } from './dto/create-photos_room.dto';
import { UpdatePhotosRoomDto } from './dto/update-photos_room.dto';

@Controller('photos-rooms')
export class PhotosRoomsController {
  constructor(private readonly photosRoomsService: PhotosRoomsService) {}

  @Post()
  create(@Body() createPhotosRoomDto: CreatePhotosRoomDto) {
    return this.photosRoomsService.create(createPhotosRoomDto);
  }

  @Get()
  findAll() {
    return this.photosRoomsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.photosRoomsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhotosRoomDto: UpdatePhotosRoomDto) {
    return this.photosRoomsService.update(id, updatePhotosRoomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.photosRoomsService.remove(id);
  }
}
