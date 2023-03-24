import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePhotosPlateDto } from './dto/create-photos_plate.dto';
import { UpdatePhotosPlateDto } from './dto/update-photos_plate.dto';

@Injectable()
export class PhotosPlatesService {

  constructor( private readonly prisma: PrismaService){}

  create(createPhotosPlateDto: CreatePhotosPlateDto) {
    return this.prisma.photoPlate.create({
      data:{
        ...createPhotosPlateDto
      }
    });
  }

  findAll() {
    return this.prisma.photoPlate.findMany();
  }

  findOne(id: string) {
    return this.prisma.photoPlate.findUnique({
      where:{ id }
    });
  }

  update(id: string, updatePhotosPlateDto: UpdatePhotosPlateDto) {
    return this.prisma.photoPlate.update({
      where:{ id },
      data:{
        ...updatePhotosPlateDto
      }
    });
  }

  remove(id: string) {
    return this.prisma.photoPlate.delete({
      where:{ id }
    });
  }
}
