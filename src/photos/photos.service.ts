import { Injectable } from '@nestjs/common';
import { UpdateIslandDto } from 'src/islands/dto/update-island.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';

@Injectable()
export class PhotosService {

  constructor(private readonly prisma: PrismaService){}

  create(createPhotoDto: CreatePhotoDto) {
    return this.prisma.photo.create({
      data:{

        ...createPhotoDto

      }
    });
  }

  findAll() {
    return this.prisma.photo.findMany();
  }

  findOne(id: string) {
    return this.prisma.photo.findUnique({
      where:{ id }
    });
  }

  update(id: string, updatePhotoDto: UpdatePhotoDto) {
    return this.prisma.photo.update({
      where:{ id },
      data:{
        ...updatePhotoDto
      }
    });
  }

  remove(id: string) {
    return this.prisma.photo.delete({
      where:{ id }
    });
  }
}
