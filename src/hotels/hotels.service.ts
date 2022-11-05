import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';

@Injectable()
export class HotelsService {
  
  constructor(private readonly prisma: PrismaService){}

  create(createHotelDto: CreateHotelDto) {
    return this.prisma.hotel.create({
      data:{
        ...createHotelDto
      }
    });
  }

  findAll() {
    return this.prisma.hotel.findMany();
  }

  findOne(id: string) {
    return this.prisma.hotel.findUnique({
      where:{ id }
    });
  }

  update(id: string, updateHotelDto: UpdateHotelDto) {
    return this.prisma.hotel.update({
      where:{ id },
      data:{
        ...updateHotelDto
      }
    });
  }

  remove(id: string) {
    return this.prisma.hotel.delete({
      where:{ id }
    });
  }
}
