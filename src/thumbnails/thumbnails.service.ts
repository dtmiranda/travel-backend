import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateThumbnailDto } from './dto/create-thumbnail.dto';
import { UpdateThumbnailDto } from './dto/update-thumbnail.dto';

@Injectable()
export class ThumbnailsService {

  constructor(private readonly prisma: PrismaService){}

  create(createThumbnailDto: CreateThumbnailDto) {
    return this.prisma.thumbnail.create({
      data:{
        ...createThumbnailDto
      }
    });
  }

  findAll() {
    return this.prisma.thumbnail.findMany();
  }

  findOne(id: string) {
    return this.prisma.thumbnail.findUnique({
      where:{ id }
    });
  }

  update(id: string, updateThumbnailDto: UpdateThumbnailDto) {
    return this.prisma.thumbnail.update({
      where:{ id },
      data:{
        ...updateThumbnailDto
      }
    });
  }

  remove(id: string) {
    return this.prisma.thumbnail.delete({
      where:{ id }
    });
  }
}
