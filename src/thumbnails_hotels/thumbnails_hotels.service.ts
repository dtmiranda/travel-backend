import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateThumbnailsHotelDto } from './dto/create-thumbnails_hotel.dto';
import { UpdateThumbnailsHotelDto } from './dto/update-thumbnails_hotel.dto';

@Injectable()
export class ThumbnailsHotelsService {

constructor(private readonly prisma: PrismaService){}

  create(createThumbnailsHotelDto: CreateThumbnailsHotelDto) {
    return this.prisma.thumbnailHotel.create({
      data:{
        ...createThumbnailsHotelDto
      }
    });
  }

  findAll() {
    return this.prisma.thumbnailHotel.findMany();
  }

  findOne(id: string) {
    return this.prisma.thumbnailHotel.findUnique({
      where:{ id }
    });
  }

  update(id: string, updateThumbnailsHotelDto: UpdateThumbnailsHotelDto) {
    return this.prisma.thumbnailHotel.update({
      where:{ id },
      data:{
        ...updateThumbnailsHotelDto
      }
    });
  }

  remove(id: string) {
    return this.prisma.thumbnailHotel.delete({
      where:{ id }
    });
  }
}
