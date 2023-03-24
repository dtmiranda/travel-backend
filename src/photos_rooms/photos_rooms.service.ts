import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePhotosRoomDto } from './dto/create-photos_room.dto';
import { UpdatePhotosRoomDto } from './dto/update-photos_room.dto';

@Injectable()
export class PhotosRoomsService {

  constructor(private readonly prisma: PrismaService){}

  create(createPhotosRoomDto: CreatePhotosRoomDto) {
    return this.prisma.photoRoom.create({
      data:{
        ...createPhotosRoomDto
      }
    });
  }

  findAll() {
    return this.prisma.photoRoom.findMany();
  }

  findOne(id: string) {
    return this.prisma.photoRoom.findUnique({
      where:{ id }
    });
  }

  update(id: string, updatePhotosRoomDto: UpdatePhotosRoomDto) {
    return this.prisma.photoRoom.update({
      where:{ id },
      data:{
        ...updatePhotosRoomDto
      }
    });
  }

  remove(id: string) {
    return this.prisma.photoRoom.delete({
      where:{ id }
    });
  }
}
